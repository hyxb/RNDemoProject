/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import Main from './js/Main/main'
// import App from './demo';
// import inputDemo from './inputDemo';
// import FlatlistBasice from './FlatList';
// import {pizzaTranslator} from './inputDemo'
// import ScrollViewDemo from './ScrollViewDemo';
// import MoviesDemo from './MoviesDemo';
import SampleAppMovies from './App';
// import SectionListBasics from './SectionList';

AppRegistry.registerComponent(appName, () => SampleAppMovies);
