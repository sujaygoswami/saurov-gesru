jQuery(document).ready(function() {
      jQuery( "#eventSearch #submit_event" ).click(function() {
            jQuery('#eventSearch').submit()
      });
       jQuery( "#eventSearch #submit_reset" ).click(function() {
        alert("reset");
            jQuery('#eventSearch').submit()
      });
});