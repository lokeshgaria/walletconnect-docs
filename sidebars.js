// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['readme']
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'link',
          label: 'Web3Modal',
          href: '/2.0/web3modal/about'
        },
        'web3wallet/about'
      ]
    },
    {
      type: 'category',
      label: 'Cloud',
      collapsible: false,
      className: 'menu_outer_list',
      items: ['cloud/explorer', 'cloud/relay']
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'APIs',
          collapsed: true,
          collapsible: true,
          items: ['api/sign', 'api/auth', 'api/chat', 'api/push']
        },
        {
          type: 'category',
          label: 'Multi-Chain',
          items: ['advanced/multichain/overview', 'advanced/multichain/chain-list']
        },
        'advanced/echo-server'
      ]
    },
    {
      type: 'category',
      label: 'Technical Reference',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'advanced/faq',
        'advanced/glossary',
        'advanced/migrating-from-v1.0',
        'advanced/what-changed-from-v1.0',
        {
          type: 'category',
          label: 'RPC Reference',
          items: [
            'advanced/rpc-reference/everscale-rpc',
            'advanced/rpc-reference/ethereum-rpc',
            'advanced/rpc-reference/cosmos-rpc',
            'advanced/rpc-reference/solana-rpc',
            'advanced/rpc-reference/stellar-rpc',
            'advanced/rpc-reference/tezos-rpc',
            'advanced/rpc-reference/near-rpc',
            'advanced/rpc-reference/xrpl-rpc'
          ]
        },
        {
          type: 'category',
          label: 'Specs',
          collapsed: true,
          collapsible: true,
          items: [
            'specs/readme',
            {
              type: 'category',
              label: 'Client APIs',
              items: [
                {
                  type: 'category',
                  label: 'Sign API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/sign'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Auth API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/auth'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Chat API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/chat'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Push API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/push'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Core API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/core'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Meta-Clients API',
              items: [
                {
                  type: 'category',
                  label: 'Web3Inbox',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/meta-clients/web3inbox'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Web3Wallet',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/meta-clients/web3wallet'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Server APIs',
              items: [
                {
                  type: 'category',
                  label: 'Relay Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/relay'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Keys Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/keys'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Echo Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/echo'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Cast Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/cast'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'History Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/history'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  web: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      collapsible: false,
      className: 'menu_outer_list',
      items: ['web/about-web3modal', 'web/about-web3wallet']
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Modal | React',
          items: [
            'web3modal/react/introduction',
            {
              type: 'category',
              label: 'Ethereum',
              items: [
                {
                  type: 'category',
                  label: 'With Wagmi',
                  items: [
                    'web3modal/react/wagmi/installation',
                    'web3modal/react/wagmi/components',
                    'web3modal/react/wagmi/hooks',
                    'web3modal/react/wagmi/options',
                    'web3modal/react/wagmi/theming',
                    'web3modal/react/wagmi/custom-wallets',
                    'web3modal/react/wagmi/custom-chains',
                    'web3modal/react/wagmi/custom-providers'
                  ]
                },
                'web3modal/react/provider'
              ]
            },
            {
              type: 'category',
              label: 'Multichain',
              items: ['web3modal/react/sign', 'web3modal/react/auth']
            }
          ]
        },
        {
          type: 'category',
          label: 'Web3Modal | HTML',
          items: ['web3modal/html/introduction']
        },

        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: [
            'web/web3wallet/installation',
            'web/web3wallet/wallet-usage',
            'web/web3wallet/upgrade-guide'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'APIs',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'Sign',
              collapsible: true,
              collapsed: true,
              items: [
                'web/sign/installation',
                'web/sign/dapp-usage',
                'web/sign/wallet-usage',
                'web/sign/smart-wallets'
              ]
            },
            {
              type: 'category',
              label: 'Auth',
              collapsible: true,
              collapsed: true,
              items: ['web/auth/installation', 'web/auth/dapp-usage', 'web/auth/wallet-usage']
            },
            {
              type: 'category',
              label: 'Push',
              collapsible: true,
              collapsed: true,
              items: ['web/push/installation', 'web/push/dapp-usage', 'web/push/wallet-usage']
            },
            {
              type: 'category',
              label: 'Chat',
              collapsible: true,
              collapsed: true,
              items: ['web/chat/installation', 'web/chat/usage']
            },
            {
              type: 'category',
              label: 'Core',
              collapsible: true,
              collapsed: true,
              items: ['web/core/pairing-api']
            }
          ]
        },
        {
          type: 'category',
          label: 'Providers',
          collapsible: true,
          collapsed: true,
          items: ['web/providers/ethereum', 'web/providers/universal']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        'web/guides/examples-and-resources',
        'web/guides/nodejs',
        'web/guides/shared-core',
        'web/guides/typescript'
      ]
    }
  ],
  android: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: [
            'android/web3wallet/installation',
            'android/web3wallet/wallet-usage',
            'android/web3wallet/upgrade-guide'
          ]
        },
        {
          type: 'category',
          label: 'Web3Inbox',
          collapsible: true,
          collapsed: true,
          items: ['android/web3inbox/installation', 'android/web3inbox/usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: [
            'android/sign/installation',
            'android/sign/dapp-usage',
            'android/sign/wallet-usage'
          ]
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: [
            'android/auth/installation',
            'android/auth/dapp-or-requester-usage',
            'android/auth/wallet-or-responder-usage'
          ]
        },
        {
          type: 'category',
          label: 'Push',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Dapp Usage',
              collapsible: true,
              collapsed: true,
              items: [['android/push/dapp-usage/getting-started']]
            },
            {
              type: 'category',
              label: 'Wallet Usage',
              collapsible: true,
              collapsed: true,
              items: ['android/push/wallet-usage/getting-started']
            }
          ]
        },
        {
          type: 'category',
          label: 'Echo',
          collapsible: true,
          collapsed: true,
          items: ['android/echo/usage']
        },
        {
          type: 'category',
          label: 'Chat',
          collapsible: true,
          collapsed: true,
          items: ['android/chat/installation', 'android/chat/usage']
        },
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: ['android/core/installation', 'android/core/pairing', 'android/core/relay']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['android/guides/examples-and-resources', 'android/guides/mobile-linking']
    }
  ],
  ios: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: [
            'ios/web3wallet/installation',
            'ios/web3wallet/wallet-usage',
            'ios/web3wallet/upgrade-guide'
          ]
        },
        {
          type: 'category',
          label: 'Web3Inbox',
          collapsed: true,
          collapsible: true,
          items: ['ios/web3inbox/installation', 'ios/web3inbox/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['ios/sign/installation', 'ios/sign/dapp-usage', 'ios/sign/wallet-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: ['ios/auth/installation', 'ios/auth/dapp-usage', 'ios/auth/wallet-usage']
        },
        {
          type: 'category',
          label: 'Push',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Dapp Usage',
              collapsible: true,
              collapsed: true,
              items: [['ios/push/dapp-usage/getting-started']]
            },
            {
              type: 'category',
              label: 'Wallet Usage',
              collapsible: true,
              collapsed: true,
              items: [['ios/push/wallet-usage/getting-started']]
            }
          ]
        },
        {
          type: 'category',
          label: 'Echo',
          collapsible: true,
          collapsed: true,
          items: ['ios/echo/installation', 'ios/echo/usage']
        },
        {
          type: 'category',
          label: 'Chat',
          collapsible: true,
          collapsed: true,
          items: ['ios/chat/installation', 'ios/chat/usage']
        },
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: [
            'ios/core/installation',
            'ios/core/pairing-usage',
            'ios/core/networking-configuration'
          ]
        },
        {
          type: 'category',
          label: 'Router',
          collapsible: true,
          collapsed: true,
          items: ['ios/router/installation']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['ios/guides/examples-and-resources', 'ios/guides/mobile-linking']
    }
  ],
  reactnative: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['reactnative/overview']
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: ['reactnative/web3wallet/Installation', 'reactnative/web3wallet/wallet-usage']
        },
        {
          type: 'category',
          label: 'Web3Modal',
          collapsible: true,
          collapsed: true,
          items: ['reactnative/web3modal/installation', 'reactnative/web3modal/dapp-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['reactnative/guides/tutorials']
    }
  ],
  flutter: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: ['flutter/installation', 'flutter/wallets/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['flutter/dapps/dapp-sign-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: ['flutter/dapps/dapp-auth-usage']
        }
      ]
    }
  ],
  unity: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand sidebar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg" alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: ['unity/sign/installation', 'unity/sign/dapp-usage', 'unity/sign/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: ['unity/core/pairing-api']
        }
      ]
    }
  ]
}
