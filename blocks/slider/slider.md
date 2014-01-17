## Yate

### Default slider

    nb-slider()

* `'value'` — `0`
* `'type'` — `'range'`
* `'size'` — `'s'`
* `'orientation'` — `'horiz'`

### Options

* `'id'` {string}
* `'class'` {array} `['my_class1' 'my_class2']` — additional classes
* `'attrs'` {object} `{'attr1': 'value1' 'attr2: 'value2' }` — custom DOM attributes
* `'size'` {string} — slider handle size
* `'theme'` {string} — theme name?
* `'type'` {string} — handle type?
* `'value'` {number} — handle position on init
* `'static'` {boolean} — render as static
* `'handle'` {object} — options for handle:
    * `'class'` {string} — additional class for handle

### Examples

Small slider:

```
    nb-slider({
        'id': 's2'
        'size': 's'
        'handle': {
            'class': 'js-custom-class'
        }
        'value': 20
    })
```

Medium slider:

```
    nb-slider({
        'size': 'm'
        'class': 'js-super-class'
        'value': 50
        'id': 's1'
    })
```

## JS

### Initialisation

Initialize nb block on DOM node:

```
    nb.block(node);
```

Initialize all nb blocks with class '_init' within DOM node

```
    nb.init(node);
```

### Slider events

* `nb-slider_slide` — Triggered on every mouse move during slide.
    * @param {Number} value  — The current value of the slider.
* `nb-slider_slidestart` — Triggered when the user starts sliding.
    * @param {Number} value  — The current value of the slider.
* `nb-slider_slidestop` — Triggered when the user starts sliding.
    * @param {Number} value  — The current value of the slider.

### Slider methods

```
    var slider = nb.block(node);

    /**
     * Set specified value to slider
     * @param {Number} value
     * @fires 'nb-slider_value-set'
     */
    slider.setValue(45);

    /**
     * Return slider's value
     * @return {Number} value
     */
    slider.getValue(); // -> 45

    /**
     * Set disabled state
     * @fires 'nb-slider_disabled'
     */
    slider.disable();

    /**
     * Reset disabled state
     * @fires 'nb-slider_enabled'
     */
     slider.enable();

     /**
     * Destroy the slider
     * @fires 'nb-slider_destroyed'
     */
    slider.destroy();

```