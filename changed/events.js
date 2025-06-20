jQuery(document).ready(function () {
      jQuery("#eventSearch #submit_event").click(function () {
            jQuery('#eventSearch').submit()
      });
      jQuery("#eventSearch #submit_reset").click(function () {
            jQuery("#eventSearch #tx_gesru_eventlist_search").val('');
            jQuery("#eventSearch #tx_gesru_eventlist_fromdate").val('');
            jQuery("#eventSearch #tx_gesru_eventlist_todate").val('');
            jQuery('#eventSearch').submit()
      });


      // datepicker
      jQuery('.datepicker').each(function () {
            jQuery(this).datepicker({
                  prevText: '&#x3c;zurück', prevStatus: '',
                  prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
                  nextText: 'Vor&#x3e;', nextStatus: '',
                  nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
                  currentText: 'heute', currentStatus: '',
                  todayText: 'heute', todayStatus: '',
                  clearText: '-', clearStatus: '',
                  closeText: 'schließen', closeStatus: '',
                  monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                  monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                  dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
                  dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                  dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                  showMonthAfterYear: false,
                  dateFormat: 'dd.mm.yy'
            });
      });


      // tooltips
      jQuery('.ext-custom-tooltip .tooltips').append("<span></span>");
      jQuery('.ext-custom-tooltip .tooltips:not([tooltip-position])').attr('tooltip-position', 'bottom');


      jQuery(".ext-custom-tooltip .tooltips").mouseenter(function () {
            jQuery(this).find('span').empty().append($(this).attr('tooltip'));
      });
});