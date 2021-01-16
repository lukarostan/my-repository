<template>
    <div class="login-container">
        <img class="logo" src="@/assets/logo.png" alt="logo">
        <div class="login__form-container">
            <form action="">

            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
      

}
</script>
<style lang="sass" scoped>
@media screen and (max-width: 1024px)
    .login__form-container
        width: 80%
        height: 65vh
@media screen and (min-width: 1024px)
    .login__form-container
        width: 30%
        height: 60vh

.login-container
    background:  linear-gradient(to top, #b7d4ff 0%, #7eb3ff 120%)
    width: 100vw
    height: 100vh
    display: flex
    flex-direction: column
    .logo
        width: 100px
        height: 100px
        margin: 3% auto 0 auto
    .login__form-container
        background-color: #fff
        margin: 4% auto
        border-radius: 8px
        border: 1px solid lightgray
</style>