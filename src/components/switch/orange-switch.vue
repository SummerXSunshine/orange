<template>
    <div class="orange-switch" :class="switchClass" @click="switchClick">
        <div class="orange-switch-node"></div>
    </div>
  </template>
  
  <script>
  export default {
        name: 'orange-switch',
        props: {
            modelValue: {

            }
        },
        computed: {
            switchClass() {
                if(this.modelValue) {
                    return {
                    'orange-switch-on': true,
                    }
                }
                return {};
            }
        },
        methods: {
            switchOn() {
                this.$emit('switch-on');
                this.$emit('update:modelValue', true);
            },
            switchOff() {
                this.$emit('switch-off');
                this.$emit('update:modelValue', false);
            },
            switchClick() {
                if(this.modelValue) {
                    this.switchOff();
                } else {
                    this.switchOn();
                }
            },
        }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .orange-switch{
        position: relative;
        display: inline-block;
        box-sizing: content-box;
        width: 50px;
        height: 30px;
        border-radius: 15px;
        cursor: pointer;
        background-color: #ebebeb;
        transition: background-color .3s ease;
    }
    .orange-switch-on {
        background-color: #e93030;
    }
    .orange-switch-node {
        position: absolute;
        top: 1px;
        left: 0;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #ffffff;
        transform: translate(1px);
    }
    .orange-switch-on .orange-switch-node {
        transform: translate(calc( 50px - 29px ));
    }
  </style>
  