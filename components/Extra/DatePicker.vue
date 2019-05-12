<template>
    <input type="text" :id="id" :name="id" />
</template>
<script type="text/javascript">

// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
	export default {
		props:['id','DatePicker'],
		mounted: function(){
            $('input[name="'+ this.id +'"]').daterangepicker({
              autoUpdateInput: true,
              locale: {
                  cancelLabel: 'Clear'
              }
            });

            $('input[name="'+ this.id +'"]').on('apply.daterangepicker', function(ev, picker) {
                $(this).val(picker.startDate.format('DD-MM-YYYY') + '   ->   ' + picker.endDate.format('DD-MM-YYYY'));
            });

            $('input[name="'+ this.id +'"]').on('cancel.daterangepicker', function(ev, picker) {
                $(this).val('');
            });
            // var self = this;
            // var input = $('input[name="'+ this.id +'"]');
            // input.daterangepicker();
            // input.on('apply.daterangepicker', function(ev, picker) {
            // self.$emit('daterangechanged',);
            // });
        }
	}
</script>