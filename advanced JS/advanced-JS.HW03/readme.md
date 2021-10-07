1. Обьясните своими словами, как вы понимаете, что такое
   деструктуризация и зачем она нужна.

Деструктуризация – это особый синтаксис, который позволяет разбивать
объект или массив на части и присваивать их в переменные одним действием.
Базовый синтаксис деструктуризации объект и массив имеет отличия.

Объекты: свойство объекта и соответствующая переменная должны иметь одно и
то же имя(порядок перечисления переменных не имеет значения). 
Для присвоения свойства объекта переменной с отличающимся именем,
указывается соответствие через двоеточие.
let {свойствоОбъекта1: имяПеременной1, свойствоОбъекта2: имяПеременной2} = объект;

Массивы: тут каждой переменной будет присвоен элемент массива согласно их порядку. 
Также можно отбросить ненужные элементы массива, используя запятую.
let [, , имяПеременной] = массив; - имяПеременной будет присвоено третьему элементу 
массива (с индексом 2), первые два эл. игнорируются.
Если нужно присвоить все значения массива в переменную, но неизвестно сколько будет
элементов в конечном итоге, то можно воспользоваться spread-оператором.
let [имяПеременной1, имяПеременной2, ...rest] = массив; - первые два элемента массива
будут присвоены соответствующим переменным, все остальные эл. в виде отдельного
массива будут присвоены в rest.

Как в случае массивов, так и в случае объектов, переменным можно присваивать
дефолтные значения через знак "=", они будут использованы, если в массиве/объекте
будет отсутствовать соответствующий эл./свойство. Если есть вложенные массивы/объекты,
то нужно сохранять ту же структуру, что и исходный объект/массив.
let {имяПер1, имяПер2: {имяПер2.1, имяПер2.2}, имяПер3: [имяПер3.1, имяПер3.2]} = объект;