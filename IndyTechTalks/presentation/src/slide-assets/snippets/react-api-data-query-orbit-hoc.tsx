import { compose } from 'recompose';
import { withData as withOrbit } from 'react-orbitjs';

import { query, buildFindRecord, buildOptions } from '@data';

import { withLoader } from '@data/containers/with-loader';
import { withError } from '@data/containers/with-error';

const mapNetworkToProps = (passedProps) => {
  const { match } = passedProps;
  const { params: { id } } = match;

  return {
    project: [q => buildFindRecord(q, 'project', id), buildOptions({
      include: ['organization', 'group', 'owner', 'reviewers', 'type']
    })]
  };
};

export function withData(WrappedComponent) {
  return compose(
    query(mapNetworkToProps, { passthroughError: true }),
    withError(({ error }) => error),
    withLoader(({ project }) => !project),
  )(WrappedComponent);
}
