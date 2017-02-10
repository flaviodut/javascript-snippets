/**
 * SIMPLES IN VIEW
 * Watch for objects in the view window.
 *
 * Options:
 *  - wrapper:
 *    - tag (string)
 *    - class (string)
 *  - caption:
 *    - tag (string)
 *    - class (string)
 *  - imageClass (string)
 *  - bgColor (color)
 *  - color (color)
 *
 */
;(function($) {
  'use strict';
  
  $.fn.autoImageCaption = function(options) {

    var defaults = {
      wrapper: {
        tag: 'div',
        class: 'captioned-wrap'
      },
      caption: {
        tag: 'span',
        class: 'captioned-caption'
      },
      imageClass: 'captioned-image',
      bgColor: null,
      color: null
    };

    var opts = $.extend(true, {}, defaults, options);

    var reTagClass = /^[A-Za-z][-_A-Za-z0-9]+$/;

    // validate all options from wrapper and caption
    $.each(opts, function(key, val) {
      if (key === 'wrapper' || key === 'caption') {
        if (typeof val.tag !== 'string' || val.tag.match(reTagClass) === null) {
          opts[key]['tag'] = defaults[key]['tag'];
        }
        if (typeof val.class !== 'string' || val.class.match(reTagClass) === null) {
          opts[key]['class'] = defaults[key]['class'];
        }
      }
    });

    return this.each(function(i, el) {
      var $img = $(el);
      
      if ($img.parent(opts.wrapper.class).length === 0) {
        $img
          .addClass(opts.imageClass)
          .wrap('<'+opts.wrapper.tag+' class="'+opts.wrapper.class+'"></'+opts.wrapper.tag+'>')
          .after('<'+opts.caption.tag+' class="'+opts.caption.class+'">' + $img.attr('alt') + '</'+opts.caption.tag+'>');
      }
      
      if (opts.bgColor) $img.parent().css('background-color', opts.bgColor);
      
      if (opts.color) $img.siblings('.' + opts.caption.class).css('color', opts.color);
    });
  };
}(jQuery));
