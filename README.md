# AA Blog Theme

## Helpers

### horizontal-scroll

Wrap an element with this helper to enable scroll if the element is too wide to fit

```html
<div class="horizontal-scroll">
    ...
</div>
```

### narrow

Normal
```
<div class="aa">
    narrow:100100,9400340
    narrow:100200,9400340
    narrow:100300,9400340
</div>
```

Without CE
```
<div class="aa">
    narrow:100100
    narrow:100200
    narrow:100300
</div>
```

### tablesort

Example
```html
<table class="tablesort">
    <thead>
        <tr>
            <th>Name</th>
            <th>Damage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Altria</td>
            <td data-sort-method='number'>1,111</td>
        </tr>
        <tr>
            <td>Emiya</td>
            <td data-sort-method='number'>999</td>
        </tr>
    </tbody>
</table>
```

Notes:

- table must have class tablesort
- thead/tbody are required otherwise the headers are sorted along with the body
- if you want the numeric values to be sorted as numbers, you need to define the data-sort-method attribute. sorting as string means 1111 is less than 999
