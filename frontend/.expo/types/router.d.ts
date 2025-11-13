/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/profile`; params?: Router.UnknownInputParams; } | { pathname: `/statistics`; params?: Router.UnknownInputParams; } | { pathname: `/temperatureData`; params?: Router.UnknownInputParams; } | { pathname: `/history`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `/statistics`; params?: Router.UnknownOutputParams; } | { pathname: `/temperatureData`; params?: Router.UnknownOutputParams; } | { pathname: `/history`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `/statistics${`?${string}` | `#${string}` | ''}` | `/temperatureData${`?${string}` | `#${string}` | ''}` | `/history${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/profile`; params?: Router.UnknownInputParams; } | { pathname: `/statistics`; params?: Router.UnknownInputParams; } | { pathname: `/temperatureData`; params?: Router.UnknownInputParams; } | { pathname: `/history`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
