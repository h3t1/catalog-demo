<template>
    <div class="banner">
        <span>Tokko kini jadi <b>LummoSHOP</b>.
        </span><a href="https://www.lummoshop.co.id/blog/tokko-kini-jadi-lummoshop/">Pelajari lebih lanjut</a>
    </div>
</template>
<script>
export default {
    name: 'BannerComponent'
}
</script>
<style scoped lang="scss">
.banner {
    background: #065f46;
    min-height: 35px;
    justify-content: center;
    align-items: center;
    color: white;
    font-style: normal;
    font-weight: normal;
    display: flex;
    font-family: Inter;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    -webkit-box-pack: center;

    a {
        margin-left: 5px;
        text-decoration: underline;
        color: rgb(255, 255, 255);
    }
}
</style>