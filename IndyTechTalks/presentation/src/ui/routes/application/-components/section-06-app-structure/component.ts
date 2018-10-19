import Component from 'sparkles-component';

function expand(tree: any): any {
  if (!tree) return null;

  if (Array.isArray(tree)) {
    if (tree.length === 0) return null;

    let root = tree[0];
    let branches = tree.slice(1);

    if (typeof root === 'string') {
      return {
        name: root,
        children: branches.map(b => expand(b))
      }
    }

    return {
      name: '~project',
      children: tree.map(b => expand(b))
    }
  }

  return { name: tree };
}


const genericTree = [
  ['src',
    ['data'],
    ['redux-store'],
    ['ui',
      ['components',
        ['list-paginator',
          ['paginator-control', 'component.js', 'template.hbs'],
          '-integration-test.js',
          '-page.js',
          'component.js',
          'template.hbs',
        ]
      ],
      ['routes',
        ['login', '-acceptance-test.js', 'route.js', 'template.hbs'],
        ['post',
          ['-components',
            ['post-viewer', 'component.js', 'template.hbs']
          ],
          ['edit',
            ['-components',
              ['post-editor', 'calculate-post-title.js', 'component.js', 'template.hbs']
            ],
            'route.js',
            'template.hbs'
          ],
          'route.js',
          'template.hbs'
        ]
      ]
    ]
  ]
];

const classicTree = [
  ['app',
    ['components',
      ['list-paginator', 'paginator-control.js'],
      'list-paginator.js',
      'post-viewer.js',
      'post-editor.js',
      'calculate-post-title.js'
    ],
    ['controllers', 'application.js', 'login.js', 'post.js', ['post', 'edit.js']],
    ['helpers'],
    ['models', 'blog.js', 'post.js'],
    ['routes', 'application.js', 'login.js', 'post.js', ['post', 'edit.js']],
    ['styles', 'app.scss'],
    ['templates',
      ['components',
        ['list-paginator', 'paginator-control.hbs'],
        'list-paginator.hbs',
        'post-viewer.hbs',
        'post-editor.hbs',
        'calculate-post-title.hbs'
      ],
      'application.hbs',
      'login.hbs',
      'post.hbs',
      ['post', 'edit.hbs']
    ],
    'app.js',
    'index.html',
    'resolver.js',
    'router.js'
  ],
  ['tests',
    ['integration',
      ['components', 'list-paginator-test.js']
    ],
    ['acceptance', 'login-test.js']
  ]
];
const muTree = [
  ['src',
    ['data',
      ['models',
        'post.js', 'blog.js'
      ],
    ],
    ['ui',
      ['components',
        ['list-paginator',
          ['paginator-control', 'component.js', 'template.hbs'],
          '-integration-test.js',
          '-page.js',
          'component.js',
          'template.hbs',
        ],
      ],
      ['routes',
        ['application', 'controller.js', 'router.js'],
        ['login', '-acceptance-test.js', 'controller.js', 'route.js', 'template.hbs'],
        ['post',
          ['-components',
            ['post-viewer', 'component.js', 'template.hbs']
          ],
          ['edit',
            ['-components',
              ['post-editor', 'calculate-post-title.js', 'component.js', 'template.hbs']
            ],
            'controller.js',
            'route.js',
            'template.hbs'
          ],
          'controller.js',
          'route.js',
          'template.hbs'
        ],
      ],
      ['styles', 'app.scss'],
      'index.html'
    ]
  ]
];

const theReduxPart = [
  ['redux-store',
    'index.ts',
    'enhancers.ts',
    'middleware.ts',
    'reducers.ts',
    ['todos',
      'index.ts',
      'selectors.ts',
      'shared.ts',
      ['actions',
        'add.ts',
        'clear-completed.ts',
        'complete.ts',
        'destroy.ts',
        'edit.ts',
      ]
    ]
  ]
];

const emberReduxTree = [
  ['src',
    theReduxPart[0],
    ['services', 'redux.ts'],
    ['ui',
      ['components',
        ['todo-item',
          ['todo-display', 'component.ts', 'template.hbs'],
          'component.ts',
          'template.hbs'
        ],
        ['todo-list', 'component.ts', 'template.hbs'],
        ['footer',
          ['footer-display', 'component.ts', 'template.hbs'],
          'component.ts',
          'template.hbs'
        ],
        ['header', 'component.ts', 'template.hbs']
      ],
      ['routes',
        ['application', 'template.hbs'],
      ],
      ['styles', 'app.scss']
    ],
    'main.js',
    'resolver.js',
    'router.js'
  ]
];
const reactReduxTree = [
  ['src',
    theReduxPart[0],
    ['ui',
      ['components',
        ['footer', 'display.tsx', 'index.tsx'],
        ['header', 'display.tsx', 'index.tsx'],
        ['todo', 'display.tsx', 'index.tsx'],
        'todo-list.tsx',
        'todo-mvc.tsx'
      ],
      ['styles', 'app.scss'],
    ],
    'index.html',
    'index.tsx'
  ]
];

const silAppBuilderTree = [
  ['src',
    ['data',
      ['containers',
        ['api',
          'index.ts',
          'with-pagination.tsx',
          'with-sorting.tsx',
          'with-filtering',
        ],
        ['resources',
          ['application-type', 'list.tsx'],
          ['notification', 'with-collection-data-actions.tsx', 'with-data-actions.tsx'],
          ['organization', 'with-data-actions.tsx'],
          ['project', 'list.tsx', 'with-data-actions'],
          'etc.ts'
        ],
        'wait-for.tsx',
        'with-current-organization.tsx',
        'with-current-user.tsx',
        'with-error.tsx',
        'with-loader.tsx',
        'with-logout.tsx',
      ],
      ['errors', 'server-error.ts'],
      // ['models',
      //   'application-type.ts',
      //   'group-membership.ts',
      //   'group.ts',
      //   'notification.ts',
      //   'organization-invite.ts',
      //   'organization-membership.ts',
      //   'project.ts',
      //   'etc.ts'
      // ],
      'helpers.ts',
      'index.ts',
      'provider.tsx',
      'push-payload.ts',
      'query.tsx',
      'schema.ts',
      'store-helpers.ts',
      'store.ts',
    ],
    // ['lib',
    //   'auth0.ts',
    //   'collection.ts',
    //   'date.ts',
    //   'debounce.ts',
    //   'dom.ts',
    //   'fetch.ts',
    //   'i18n.ts',
    //   'routing.tsx',
    //   'toast.ts',
    //   'with-timezone.tsx'
    // ],
    ['redux-store',
      'same.structure',
      'as.the',
      'redux.slide'
    ],
    // ['translations',
    //   ['locales', 'en-us.json'],
    //   'index.tsx'
    // ],
    ['ui',
      ['components'],
      ['routes',
        ['admin',
          ['invite-organization',
            '-display-integration-test.tsx',
            '-page.ts',
            'display.tsx',
            'index.tsx',
            'styles.scss'
          ],
          'index.tsx'
        ],
        ['errors'],
        ['index'],
        ['invitations'],
        ['login'],
        ['open-source'],
        ['organizations'],
        ['project-directory'],
        ['projects'],
        ['tasks'],
        ['users'],
        'root.tsx'
      ],
      ['styles', 'app.scss'],
      'application.tsx'
    ],
    'env.ts',
    'global-config.ts',
    'index.tsx'
  ]
];
const emberclearTree = [
  ['src',
    ['data',
      ['models',
        ['application', 'adapter.js', 'serializer.js'],
        ['identity', 'model.ts'],
        'channel.ts',
        'message-media.ts',
        'message.ts',
        'relay.ts'
      ]
    ],
    ['init',
      ['initializers', 'deprecations.ts', 'service-worker-prompt.ts']
    ],
    ['services',
      ['identity', 'service-unit-test.ts', 'service.ts'],
      ['messages',
        ['builder', 'index.ts'],
        'dispatcher.ts',
        'factory.ts',
        'processor.ts'
      ],
      ['notifications', 'service-unit-test.ts', 'service.ts'],
      ['redirect-manager', 'service.ts', 'unit-test.ts'],
      'channel-manager.ts',
      'chat-scroller.ts',
      'contact-manager.ts',
      'modals.ts',
      'prism-manager.ts',
      'relay-connection.ts',
      'relay-manager.ts',
      'setting.ts',
      'sidebar.ts',
      'status-manager.ts',
      'toast.ts'
    ],
    ['ui',
      ['components'],
      ['routes',
        ['application',
          ['-components',
            ['modals', 'template.hbs']
          ],
          'route.ts',
          'template.hbs'
        ],
        ['chat',
          ['index', 'controller.ts', 'template.hbs'],
          ['privately-with', 'controller.ts', 'route.ts', 'template.hbs'],
          'acceptance-test.ts',
          'route-unit-test.ts',
          'route.ts',
          'template.hbs'
        ],
        ['contacts'],
        ['faq'],
        ['index'],
        ['invite'],
        ['login'],
        ['logout'],
        ['settings'],
        ['setup'],
      ],
      ['styles', 'app.scss'],
      'index.html'
    ],
    ['utils'],
    'formats.js',
    'main.js',
    'resolver.js',
    'router.js',
  ],
  ['tests'],
  ['translations']
];

console.log(expand(classicTree));

export default class extends Component {
  classicTree = expand(classicTree);
  muTree = expand(muTree);
  genericTree = expand(genericTree);

  reactReduxTree = expand(reactReduxTree);
  emberReduxTree = expand(emberReduxTree);
  silAppBuilderTree = expand(silAppBuilderTree);
  emberclearTree = expand(emberclearTree);
}
