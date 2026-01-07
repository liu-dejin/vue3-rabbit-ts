import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import prettier from '@vue/eslint-config-prettier'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    // 扩展 files 范围，确保 js, ts, vue 都能被检查到
    files: ['**/*.{js,mjs,jsx,vue,ts,mts,tsx}']
  },
  {
    // 加上这行，让 ESLint 彻底绕过这些自动生成的文件
    ignores: [
      'src/types/auto-imports.d.ts',
      'src/types/components.d.ts',
      '**/*.json',
      '.vscode/**',
      'tsconfig.json',
      'tsconfig.*.json'
    ]
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  // 这里的 prettier 插件会自动读取你的 .prettierrc 配置文件
  prettier,

  {
    rules: {
      // --- 代码质量 ---
      'vue/no-v-html': 'warn',
      'vue/require-v-for-key': 'error',

      // 解决你遇到的报错：允许短路和三元表达式
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true
        }
      ],
      //驼峰命名
      // 1. 强制组件名为大驼峰
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],

      // 2. 强制组件定义使用多单词（防止与原生 HTML 冲突）
      'vue/multi-word-component-names': ['warn', { ignores: ['index'] }],

      // 3. 强制 Props 声明使用小驼峰
      'vue/prop-name-casing': ['error', 'camelCase'],

      // 4. 强制自定义事件使用小驼峰 (Vue 3 推荐)
      'vue/custom-event-name-casing': ['error', 'camelCase'],

      // 5. 变量命名规范 (TS/JS)
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'] // 变量支持小驼峰、大写常量、组件名
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'] // 函数或组件函数
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'] // 类型、接口、类用大驼峰
        }
      ],

      // 既然你开启了 "singleAttributePerLine": true，我们让 ESLint 也保持一致或不冲突
      'vue/first-attribute-linebreak': 'off',

      // 标签自闭合：配合你的风格
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'always',
            normal: 'never', // div, span 等强制双标签
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }
      ],
      // SFC顺序
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      // 属性排序
      'vue/attributes-order': [
        'warn',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT'
          ],
          alphabetical: false
        }
      ],

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-redeclare': 'error'
    }
  }
)
