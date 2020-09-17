import once from 'lodash/once';
import get from 'lodash/get';
import each from 'lodash/each';
import { Platform } from 'react-native';

export class Deprecations {
  public deprecatedMethods: Array<{ key: string; showWarning: any }> = [
    {
      key: 'topBar.searchBarHiddenWhenScrolling',
      showWarning: once((_key: string, parentOptions: object) => {
        console.warn(
          `${_key} is deprecated and will be deprecated in the next major version. For more information see https://github.com/wix/react-native-navigation/issues/6585`,
          parentOptions
        );
      }),
    },
    {
      key: 'topBar.searchBarPlaceholder',
      showWarning: once((_key: string, parentOptions: object) => {
        console.warn(
          `${_key} is deprecated and will be deprecated in the next major version. For more information see https://github.com/wix/react-native-navigation/issues/6585`,
          parentOptions
        );
      }),
    },
    {
      key: 'topBar.searchBarBackgroundColor',
      showWarning: once((_key: string, parentOptions: object) => {
        console.warn(
          `${_key} is deprecated and will be deprecated in the next major version. For more information see https://github.com/wix/react-native-navigation/issues/6585`,
          parentOptions
        );
      }),
    },
    {
      key: 'topBar.searchBarTintColor',
      showWarning: once((_key: string, parentOptions: object) => {
        console.warn(
          `${_key} is deprecated and will be deprecated in the next major version. For more information see https://github.com/wix/react-native-navigation/issues/6585`,
          parentOptions
        );
      }),
    },
    {
      key: 'topBar.hideNavBarOnFocusSearchBar',
      showWarning: once((_key: string, parentOptions: object) => {
        console.warn(
          `${_key} is deprecated and will be deprecated in the next major version. For more information see https://github.com/wix/react-native-navigation/issues/6585`,
          parentOptions
        );
      }),
    },
  ];

  public checkForDeprecatedOptions(options: Record<string, any>) {
    each(this.deprecatedMethods, (method) => {
      if (get(options, method.key, null)) {
        method.showWarning(method.key, options);
      }
    });
  }

  public onProcessOptions(key: string, parentOptions: Record<string, any>, commandName: string) {
    if (
      key === 'bottomTabs' &&
      parentOptions[key].visible !== undefined &&
      Platform.OS === 'ios' &&
      commandName === 'mergeOptions'
    ) {
      this.deprecateBottomTabsVisibility(parentOptions);
    }
    if (key === 'searchBar' && Platform.OS === 'ios' && typeof parentOptions[key] === 'boolean') {
      this.deprecateSearchBarOptions(parentOptions);
    }
  }

  public onProcessDefaultOptions(_key: string, _parentOptions: Record<string, any>) {}

  private deprecateSearchBarOptions = once((parentOptions: object) => {
    console.warn(
      `toggling searchBar visibility using a boolean value will be deprecated in the next major version. For more information see https://github.com/wix/react-native-navigation/issues/6585`,
      parentOptions
    );
  });
  private deprecateBottomTabsVisibility = once((parentOptions: object) => {
    console.warn(
      `toggling bottomTabs visibility is deprecated on iOS. For more information see https://github.com/wix/react-native-navigation/issues/6416`,
      parentOptions
    );
  });
}
