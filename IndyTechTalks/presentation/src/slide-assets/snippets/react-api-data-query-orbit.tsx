import * as React from 'react';
import { withData as withOrbit, WithDataProps } from 'react-orbitjs';

import { defaultSourceOptions } from '@data';
import { ErrorMessage } from '@ui/components/errors';
import { isEmpty } from '@lib/collection';

export function queryApi<T>(mapRecordsToProps, options?: IQueryOptions) {
  let map;
  const opts = options || { passthroughError: false, useRemoteDirectly: false };
  const { passthroughError, useRemoteDirectly } = opts;

  if (typeof mapRecordsToProps !== 'function') {
    map = (props) => ({
      cacheKey: 'default-cache-key',
      ...mapRecordsToProps
    });
  } else {
    map = mapRecordsToProps;
  }

  return InnerComponent => {
    class DataWrapper extends React.Component<T & WithDataProps, IState> {
      state = { result: {}, error: undefined };
      mapResult: any = {};

      fetchData = async () => {
        const result = map(this.props);

        if (arePropsEqual(result, this.mapResult)) {
          return;
        }

        this.mapResult = result;

        const { dataStore, sources: { remote } } = this.props;
        const querier = useRemoteDirectly ? remote : dataStore;

        const responses = {};
        const requestPromises = Object.keys(result).map(async (key: string) => {
          if (key === 'cacheKey') { return; }

          const query = result[key];
          const args = typeof query === 'function' ? [query] : query;

          const queryResult = await querier.query(...args);

          responses[key] = queryResult;

          return queryResult;
        });

        try {
          await Promise.all(requestPromises);
        } catch (e) {
          console.error('responses:', responses, 'error:', e);
          this.setState({ error: e });
        }

        this.setState({ result: responses });
      }

      render() {
        this.fetchData();

        const { result, error } = this.state;
        const dataProps = {
          ...result,
          error
        };

        if (!passthroughError && error) {
          return <ErrorMessage error={error} />;
        }


        return <InnerComponent { ...dataProps } { ...this.props } />;
      }
    }

    return withOrbit({})(DataWrapper);
  };
}

