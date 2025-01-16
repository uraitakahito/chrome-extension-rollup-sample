(When an unknown command is used, pnpm will search for a script with the given name, so `pnpm run lint` is the same as `pnpm lint`. If there is no script with the specified name, then pnpm will execute the command as a shell script, so you can do things like `pnpm eslint`)[https://pnpm.io/pnpm-cli]

```console
% pnpm store prune
% pnpm cleandep
% pnpm install
% rollup -c -w
```

When rollup is in watch mode, [a reload mechanism is built in](https://github.com/crxjs/chrome-extension-tools/blob/508f52f6706a7c875955f77e03309b5c28930127/packages/rollup-plugin/src/plugin-reloader-simple/index.ts#L45-L209). As a result, the extension will be automatically updated when files are changed.
