# C01Lab1

https://github.com/Minjun1Kim/ReactNativeAppDemo/issues/1#issue-2082678889

crypto.getRandomValues is not supported uuidv4

In the case that this issues comes up, a way to fix it is to polyfill with 'react-native-get-random-values'

Import before uuid import.

```JS
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
```
