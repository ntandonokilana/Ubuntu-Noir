<template>
    <div>
       <footer class='footer'>
           <p>&copy; @Ubuntu Noir {{ currentYear }} </p>
       </footer>
    </div>
 </template>

 <script>
   export default {
       data() {
           return{
               currentYear: new Date().getFullYear(),
           }
       }
   }
</script>

<style>
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #000000;
        padding: 10px 0;
        text-align: center;
        color: #ffffff;
}
</style>