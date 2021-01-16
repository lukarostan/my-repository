<template>
    <div class="header">
        <slot/>
        <div class="search"><input v-model="search" type="text" placeholder="Search Albums"> <img :src="searchlogo"> </div>
    </div>
</template>
<script>
import searchlogo from "@/assets/search.png"
export default {
    name: 'pageheader',
    data: function() {
        return{
            searchlogo: searchlogo,
            search: ''
        }
    }
}
</script>
<style lang="sass" scoped>
@media screen and (max-width: 768px)
    .header
        display: flex
        flex-direction: column
        align-items: center
        .search
            width: 70%
            input
                padding: 15px
                width: 80%
    .header > * 
        margin: 15px auto
        
@media screen and (min-width: 768px)
    .header
        display: flex
        flex-direction: row
        align-items: center
        h1
            padding: 40px
            margin-left: 10%
        .search
            position: absolute
            left: 70%
            height: 40px
            width: 20%
            input
                padding: 15px 20px
                width: 85%

    
.header
    width: 100%
    background-color: #fff
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.183679)
    h1
        font-weight: 400
    .search
        display: flex
        opacity: 0.2
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.5)
        border-radius: 4px
        input
            background-color: transparent
            border: none
        img
            margin: auto
</style>