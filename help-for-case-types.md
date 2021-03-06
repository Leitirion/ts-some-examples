## Справка по case: camelCase, kebab-case, PascalCase, snake_case и другие

Общее правило для всех кейсов — никаких специальных символов и пробелов. Далее по-порядку:

----
## camelCase
Первая буква всегда маленькая, далее каждое слово начинается с большой буквы.

```nodePackageManager```

Преимущества:

1) Легко выделяется двойным кликом;
2) Компактнее чем kebab-case, snake-case;
3) Практически универсален.

Недостатки:

1) Может вызывать проблемы в системах нечувствительных к регистру; 

Применяется в именах файлов, атрибутах и именах переменных/методов/свойств, uri, в языках разметки.

Лучший для: имен переменных, свойств, модулей и файлов с ними.

----
## PascalCase

Тоже что camelCase, только первая буква всегда заглавная.

```NodePackageManager```

Преимущества все те же, что у camelCase, а так же:

1) Позволяет акцентировать внимание;

Применяется для имен классов, методов (в некоторых языках, таких как c#), enum, имен файлов содержащих классы или компоненты. Часто используется вместе с camelCase, что бы визуально разделить классы от экземпляров, свойства от методов. Так же применим для наименования синглтонов.

Лучший для: имен классов, enum, синглтонов и файлов с ними.

----
## kebab-case

Все буквы маленькие, слова разделяются дефисом.

```node-package-manager```

Преимущества:

1) Подходит для систем невосприимчивых к регистру и пробелам;
2) Легко парсится;
3) Немного читабельней, чем camelCase и PascalCase.

Недостатки:

1) Не выделяется двойным кликом;

Большинство интерпритаторов не воспринимают как единой слово, поэтому не годится для имен переменных/функций/свойств/классов.
Применяется в url, в именах директорий, в именах свойств JSON, в именах атрибутов HTML.

Лучший для: имен директорий, URI, имен свойств JSON.

----
## snake_case

Все буквы маленькие, слова разделены нижним подчеркиванием

```node_package_manager```

Преимущества:

1) Выделяется двойным кликом;
2) Подходит для систем невосприимчивых к регистру и пробелам;
3) Легко парсится;
4) Подходит для имен переменных.
5) Универсален;
6) Самый читабельный для длинных имен;
7) Самый древний из случаев.

Недостатки:

1) Менее эстетичный чем остальные;

Применим практически везде, но ввиду того, что в большом количестве раздражает взгляд, на практике используется только для ключей и идентификаторов, или если есть системные ограничения на используемые символы.

Лучший для: ключей, идентификаторов, архаичных систем.

----
## SCREAMING_SNAKE_CASE

Все буквы большие, слова разделяются нижним подчеркиванием.

```NODE_PACKAGE_MANAGER```

Преимущества все те же, что у snake_case, а так же:

1) Позволяет акцентировать на себе внимание;
2) Не будет путаницы между прописными буквами l и заглавной I.

Недостатки все те же, что у snake_case, а так же:

1) В большом количестве еще больше раздражает взгляд;
2) Визуально занимает больше пространства на экране монитора;

Применяется в именах констант и переменных окружения.

Лучший для: имен констант, переменных окружения.

----
## Train-Case

Каждое слово начинается с заглавной буквой, слова разделяются дефисом.

```Node-Package-Manager```

Преимущества те же, что у kebab-case, а так же:

1) Позволяет акцентировать внимание.

Недостатки:

1) Не подходит для систем невосприимчивых к регистру;

Применяется в заголовках запросов. Других кейсов применения не встречал.

Лучший для: заголовки запросов;

Пример

```/** Node-Package-Manager: node-package-manager/NodePackageManager.cs */
class NodePackageManager {
const string NODE_PACKAGE_MANAGER = "node_package_manager";
public NodePackageManager() {
var nodePackageManager = NODE_PACKAGE_MANAGER;
}
}
```