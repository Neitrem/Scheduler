<template>
    <my-wrapper>
        <button class="compare-button">
            <p class="title">Собрать</p>
        </button>
    </my-wrapper>
</template>

<script lang="js">
export default {

}
</script>

<style scoped lang="scss">
.compare-button {

    background: none;
    border: 1px gray solid;

    height: 300px;

    display: flex;

    flex-direction: column;

    justify-content: space-around;

    &:hover {
        border-radius: 15px;
        border: 1px white solid;
    }

    &:active {
        .title {
            font-size: 15px;
        }
    }

    .title {
        writing-mode:vertical-rl;
        color: white;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 10px;
    }
}
</style>