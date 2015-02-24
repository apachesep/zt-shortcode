/**
 * Zo2 Shortcode
 * @param {pointer} w Window pointer
 * @param {pointer} $ jQuery pointer
 * @returns {undefined}
 */
(function (w, $) {

    /* Short code main class */
    var _shortcode = {
        /* Short code add on */
        _addOn: [],
        /**
         * Elements selector
         */
        _elements: {
            /* Joomla article editor */
            joomlaEditor: "jform_articletext",
            /* Shortcode tabs */
            tabGroup: "#zo2-shortcode-groups",
            tabList: "#zo2-shortcode-tabs-wrapper > #myTab",
            tabContent: "#zo2-shortcode-tabs-wrapper > #myTabContent",
            /* Common controls */
            comControls: "#zo2-shortcode-common-controls",
            /* Shortcode preview */
            comPreview: "#zo2-shortcode-preview",
            shortcodeContent: "#zo2-sc-value",
            shortcodeRender: "#zo2-sc-render",
            shortcodePreview: "#zo2-sc-preview-content",
            shortcodeContainer: "this._elements.shortcodeContainer",
            /* Control button */
            comButtons: "#zo2-shortcode-controls",
            buttonInsert: "#zo2-sc-insert",
            buttonPreview: "#zo2-sc-preview",
            buttonClose: "#zo2-sc-close",
            /* Shortcode breadcrumb */
            breadcrumdContainer: "#zo2-shortcode-breadcrumd",
            breadcrumdHome: "#zo2-sc-all-shortcode",
            breadcrumdCurrent: "#zo2-sc-current-tab"
        },
        /**
         * Select function
         * @returns {undefined}
         */
        _init: function () {

            var _self = this;
            /* Insert button */
            $(_self._elements.buttonInsert).on('click', function () {
                var code = $(_self._elements.shortcodeContent).val();
                if (typeof (w.parent) !== 'undefined') {
                    if (w.parent.hasOwnProperty('jInsertEditorText')) {
                        /* Insert to parent editor */
                        w.parent.jInsertEditorText(code, _self._elements.joomlaEditor);
                        /* Close the box */
                        w.parent.SqueezeBox.close();
                    }
                }
            });
            /* Preview button */
            $(_self._elements.buttonPreview).on('click', function () {
                if ($(_self._elements.buttonPreview).text() === 'Preview Shortcode') {
                    $(_self._elements.buttonPreview).text('Hide Shortcode');
                } else {
                    $(_self._elements.buttonPreview).text('Preview Shortcode');
                }
                $(_self._elements.comPreview)
                        .find(_self._elements.shortcodePreview)
                        .toggle('slow', function () {
                            /* Scroll to end of page */
                            $("html, body").animate({scrollTop: $(w.document).height()});
                        });
            });
            /* Hide tab & group after choice */
            $(_self._elements.tabList).on('click', 'li', function () {
                var currentTab = $(this).find('a').text();
                $(_self._elements.breadcrumdCurrent)
                        .html(' &rarr; ' + currentTab);
                $(_self._elements.tabList).hide('slow');
                $(_self._elements.tabGroup).hide('slow');
                $(_self._elements.breadcrumdContainer).show('slow');
            });
            /* Bread crumd home */
            $(_self._elements.breadcrumdContainer).on('click', _self._elements.breadcrumdHome, function () {
                $(_self._elements.tabList).show('slow');
                $(_self._elements.tabGroup).show('slow');
                $(_self._elements.buttonPreview).text('Preview Shortcode');
                $(_self._elements.comPreview)
                        .find(_self._elements.shortcodePreview)
                        .hide('slow', function () {
                            $("html, body").animate({scrollTop: 0});
                        });
                _self.value('');
                _self.preview('');
                $(_self._elements.breadcrumdContainer).hide('slow');
                $(_self._elements.breadcrumdCurrent)
                        .html('');
                $(_self._elements.tabContent).find('.active').removeClass('active in');
                $(_self._elements.tabList).find('.active').removeClass('active');
            });
            /* Close button */
            $(_self._elements.buttonClose).on('click', function () {
                if (typeof (w.parent) !== 'undefined') {
                    if (w.parent.hasOwnProperty('SqueezeBox')) {
                        w.parent.SqueezeBox.close();
                    }
                }
            });
            /* Init shortcode add-on */
            $(this._addOn).each(function (key, item) {
                if (item.hasOwnProperty('_init')) {
                    item._init();
                }
            });
            this._hook();
        },
        /**
         * Set shortcode value
         * @param {type} value
         * @returns {undefined}
         */
        value: function (value) {
            $(this._elements.shortcodeContent).val(value);
        },
        /**
         * Preview shortcode HTML
         * @param {type} html
         * @returns {undefined}
         */
        preview: function (html) {
            $(this._elements.shortcodeRender).html(html);
        },
        /**
         * Event hook
         * @returns {undefined}
         */
        _hook: function () {
            var _self = this;
            $(this._elements.shortcodeContainer).on('keyup', '.sc-textbox', function () {
                var $parent = $(this).closest(this._elements.shortcodeContainer);
                _self._update($parent);
            });
            $(this._elements.shortcodeContainer).on('change', '.sc-selectbox', function () {
                var $parent = $(this).closest(this._elements.shortcodeContainer);
                _self._update($parent);
            });
        },
        /**
         * Update shortcode data
         * @param {type} $parent
         * @returns {undefined}
         */
        _update: function ($parent) {
            var $inputs = $parent.children().filter('.form-group').find('input,select,textarea');
            var $root = $parent.closest('[data-root*="true"]');
            var shortcodeTag = $parent.data('tag');
            var shortcode = {};
            shortcode._Tag = shortcodeTag;
            $inputs.each(function () {
                var inputType = $(this).prop('tagName');
                var property = $(this).data('property');
                var type = $(this).attr('type');
                switch (inputType) {
                    case 'INPUT':
                        switch (type) {
                            case 'checkbox':
                                var value = $(this).is(':checked');
                                break;
                            default:
                                var value = $(this).val();
                                break;
                        }
                        break;
                    default:
                        var value = $(this).val();
                        break;
                }
                if (value !== '' && property !== '') {
                    shortcode[property] = value;
                }
                if (property === '') {
                    shortcode['_Content'] = value;
                }
            });
            $parent.data('shortcode', shortcode);
            this._render($root);
        },
        /**
         * Render shortcode
         * @param {type} $root
         * @returns {undefined}
         */
        _render: function ($root) {
            var parentTag = $root.data('tag');
            var shortcode = '';
            if (typeof (parentTag) === 'undefined' || parentTag === '') {
                shortcode = this._getShortcode($root.find(this._elements.shortcodeContainer +':first'));
            } else {
                shortcode = this._getParentShortcode($root);
            }
            this.value(shortcode);
        },
        /**
         * Get shortcode of element
         * @param {type} $element
         * @returns {String}
         */
        _getShortcode: function ($element) {
            var data = $element.data('shortcode');
            if (typeof (data) === 'undefined') {
                this._update($element);
                return '';
            }
            var shortcode = '[' + data._Tag;
            $.each(data, function (key, value) {
                if (key !== '_Tag' && key !== '_Content') {
                    shortcode += ' ' + key + '="' + value + '"';
                }
            });
            shortcode += ']' + data._Content + '[/' + data._Tag + ']';
            return shortcode;
        },
        /**
         * Get parent shortcode
         * @param {type} $element
         * @returns {String}
         */
        _getParentShortcode: function ($element) {
            var _self = this;
            var data = $element.data('shortcode');
            var elementShortCode = '';
            if (typeof (data) === 'undefined') {
                this._update($element);
                return '';
            }
            var shortcode = '[' + data._Tag;
            $.each(data, function (key, value) {
                if (key !== '_Tag' && key !== '_Content') {
                    shortcode += ' ' + key + '="' + value + '"';
                }
            });
            $element.children('div' + this._elements.shortcodeContainer).each(function () {
                elementShortCode += _self._getShortcode($(this));
            });
            shortcode += ']' + elementShortCode + '[/' + data._Tag + ']';
            return shortcode;
        }
    };
    /* Check for Zo2 javascript framework */
    if (typeof (w.zo2) === 'undefined') {
        w.zo2 = {};
    }
    /* Append short code to Zo2 */
    w.zo2.shortcode = _shortcode;
    /* Init shortcode */
    $(w.document).ready(function () {
        w.zo2.shortcode._init();
    });
})(window, jQuery);