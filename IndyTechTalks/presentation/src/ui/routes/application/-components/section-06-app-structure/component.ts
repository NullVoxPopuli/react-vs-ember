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
      ['components', [
        ['list-paginator',
          ['paginator-control', 'component.js', 'template.hbs'],
          '-integration-test.js',
          '-page.js',
          'component.js',
          'template.hbs',
        ]
      ]],
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
      ['styles', 'app.scss'],
      'index.html'
    ]
  ]
];

const theReduxPart = [
  ['redux-store']
];

const reactReduxTree = [
  ['src']
];
const emberReduxTree = [
  ['src']
];

const silAppBuilderTree = [
  ['src']
];
const emberclearTree = [
  ['src']
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
