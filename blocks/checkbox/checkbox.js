nb.define('checkbox', {
    events: {
        'init': 'oninit',
        'click': '_onclick'
    },

    /**
     * Init a checkbox
     * @fires 'nb-checkbox_inited' | 'nb-radio_inited'
     */

    oninit: function() {
        this.$node = $(this.node);
        this.$control = this.$node.find('input[type]');
        this.type = this.$control.attr('type');
        if (!this.isChecked()) {
            this.$control.prop('indeterminate', true);
        }
        this.trigger('nb-' + this.type + '_inited');
    },

    /**
     * Return check state of the checkbox or radio
     * @returns {Boolean}
     */
    isChecked: function() {
        return this.$control.prop('checked');
    },

    /**
     * Checking checkbox or radio
     * @fires 'nb-checkbox_checked' | 'nb-radio_checked'
     * @returns {Object} nb.block
     */
    check: function() {
        if (this.isEnabled()) {
            this.$control.prop({
                'indeterminate': false,
                'checked': true
            });
            this.trigger('nb-' + this.type + '_checked');
        }
        return this;
    },

    /**
     * Unchecking checkbox or radio
     * @fires 'nb-checkbox_unchecked' | 'nb-radio_unchecked'
     * @returns {Object} nb.block
     */
    uncheck: function() {
        if (this.isEnabled()) {
            this.$control.prop({
                'indeterminate': false,
                'checked': false
            });
            this.trigger('nb-' + this.type + '_unchecked');
        }
        return this;
    },

    _onclick: function(e) {
        // <label><input/></label> may fires event twice
        // @see http://www.w3.org/TR/html5/forms.html#labeled-control
        if (e.target.nodeName === 'INPUT') {
            // fires block events
            if (this.$control.prop('checked')) {
                this.check();
            } else {
                this.uncheck();
            }
        }
    },

    /**
     * Return indeterminate state of the checkbox or radio
     * @returns {Boolean}
     */
    isIndeterminate: function() {
        return this.$control.prop('indeterminate');
    },

    /**
     * Set indeterminate state of the checkbox or radio
     * @fires 'nb-checkbox_indeterminated' | 'nb-radio_indeterminated'
     * @returns {Object} nb.block
     */
    setIndeterminate: function() {
        if (this.isEnabled()) {
            this.$control.prop('indeterminate', true);
            this.trigger('nb-' + this.type + '_indeterminated');
        }
        return this;
    },

    /**
     * Set determinate state of the checkbox or radio
     * @fires 'nb-checkbox_determinated' | 'nb-radio_determinated'
     * @returns {Object} nb.block
     */
    setDeterminate: function() {
        if (this.isEnabled()) {
            this.$control.prop('indeterminate', false);
            this.trigger('nb-' + this.type + '_determinated');
        }
        return this;
    },

    /**
     * Return enable state of the checkbox or radio
     * @returns {Boolean}
     */
    isEnabled: function() {
        return !this.$control.prop('disabled');
    },

    /**
     * Enable the checkbox or radio
     * @fires 'nb-checkbox_enabled' | 'nb-radio_enabled'
     * @returns {Object} nb.block
     */
    enable: function() {
        if (!this.isEnabled()) {
            this.$node.removeClass('is-disabled');
            this.$control.removeAttr('disabled');
            this.trigger('nb-' + this.type + '_enabled');
        }
        return this;
    },

    /**
     * Disable the checkbox or radio
     * @fires 'nb-checkbox_disabled' | 'nb-radio_disabled'
     * @returns {Object} nb.block
     */
    disable: function() {
        if (this.isEnabled()) {
            this.blur();
            this.$node.addClass('is-disabled');
            this.$control.attr('disabled', 'disabled');
            this.trigger('nb-' + this.type + '_disabled');
        }
        return this;
    },

    /**
     * Focus the checkbox or radio
     * @fires 'nb-checkbox_focused' | 'nb-radio_focused'
     * @returns {Object} nb.block
     */
    focus: function() {
        this.$control.focus();
        this.trigger('nb-' + this.type + '_focused');
        return this;
    },

    /**
     * Blur the checkbox or radio
     * @fires 'nb-checkbox_blured' | 'nb-radio_blured'
     * @returns {Object} nb.block
     */
    blur: function() {
        this.$control.blur();
        this.trigger('nb-' + this.type + '_blured');
        return this;
    },

    /**
     * Sets label of the checkbox or radio
     * @param {String|Number} label
     * @fires 'nb-checkbox_label-set' | 'nb-radio_label-set'
     * @returns {Object} nb.block
     */
    setLabel: function(label) {
        this.$node.find('.nb-checkbox__label').html(label);
        this.trigger('nb-' + this.type + '_label-set');
        return this;
    },

    /**
     * Gets label of the checkbox or radio
     * @returns {String | Number}
     */
    getLabel: function() {
        return this.$node.find('.nb-checkbox__label').html();
    },

    /**
     * Get name of the checkbox or radio
     * @returns {String|Object} name
     */
    getName: function() {
        return this.$control.prop('name');
    },

    /**
     * Set checkbox value
     * @param {String|Number} value
     * @fires 'nb-checkbox_name-set' | 'nb-radio_name-set'
     * @returns {Object} nb.block
     */
    setName: function(value) {
        this.$control.attr('name', value);
        this.trigger('nb-' + this.type + '_name-set');
        return this;
    },

    /**
     * Returns checkbox value
     * @returns {String}
     */
    getValue: function() {
        return this.$control.attr('value');
    },

    /**
     * Set checkbox value
     * @param {String|Number} value
     * @fires 'nb-checkbox_value-set' | 'nb-radio_value-set'
     * @returns {Object} nb.block
     */
    setValue: function(value) {
        this.$control.attr('value', value);
        this.trigger('nb-' + this.type + '_value-set');
        return this;
    }

});
