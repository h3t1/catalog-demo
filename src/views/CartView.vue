<template>
  <div class="cart">
    <div class="NoProducts__Container">
      <svg width="62" height="100" viewBox="0 0 62 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        style="margin-bottom: 25px;box-sizing: content-box;">
        <ellipse cx="31" cy="38.433" rx="17.4" ry="18.367" stroke="#CBCFDC" stroke-linecap="round"
          stroke-dasharray="0.5 2"></ellipse>
        <path stroke="#CBCFDC" stroke-linecap="round"
          d="M31.5 1.233V9.9M44.052 13.422l4.82-6.047M52.426 22.014l5.283-2.393M4.068 19.677l5.333 2.28M13.828 7.375l4.818 6.05">
        </path>
        <path d="M61.933 29.733H.067v67.314a2.669 2.669 0 0 0 2.668 2.67h56.53a2.669 2.669 0 0 0 2.668-2.67V29.733z"
          fill="#E1E4ED"></path>
        <path
          d="M16.131 40.777c1.272 0 2.303-1.086 2.303-2.424 0-1.34-1.03-2.424-2.303-2.424-1.272 0-2.303 1.085-2.303 2.424 0 1.338 1.031 2.424 2.303 2.424zM47.557 40.773c1.271 0 2.302-1.084 2.302-2.422s-1.031-2.422-2.302-2.422c-1.272 0-2.302 1.084-2.302 2.422s1.03 2.422 2.302 2.422z"
          fill="#CBCFDC"></path>
        <path
          d="M34.523 63.628h-5.5c-7.834 0-14.206-7.411-14.206-16.519v-8.756c0-.722.554-1.308 1.242-1.308.687 0 1.245.586 1.245 1.308v8.756c0 7.663 5.255 13.902 11.718 13.902h5.5c6.46 0 11.719-6.24 11.719-13.902v-8.756c0-.722.555-1.308 1.243-1.308.687 0 1.244.586 1.244 1.308v8.756c0 9.108-6.37 16.52-14.205 16.52z"
          fill="#CBCFDC"></path>
        <path
          d="M34.523 61.078h-5.501c-7.798 0-14.14-6.673-14.14-14.874v-7.853c0-.684.528-1.24 1.177-1.24.653 0 1.178.557 1.178 1.24v7.853c0 6.834 5.285 12.396 11.785 12.396h5.5c6.499 0 11.784-5.562 11.784-12.396v-7.853c0-.684.528-1.24 1.178-1.24.65 0 1.177.557 1.177 1.24v7.853c0 8.2-6.346 14.874-14.139 14.874z"
          fill="#fff"></path>
      </svg>
      <div data-testid="no-products" class="NoProducts__NoResult">Keranjangmu masih kosong...</div>
      <div class="EmptyCart__CartEmptyMsg">Yuk lihat-lihat dan mulai berbelanja di toko ini!</div>
      <router-link to="/" ><button id="return-to-catalog-from-empty-cart" class="Button">Lihat Produk</button></router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'CartView',
}
</script>
<style scoped lang="scss">
.cart {
  background: rgb(255, 255, 255);
  min-height: 80vh;
}

.NoProducts__Container {
  height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .NoProducts__NoResult {
    font-size: 16px;
    font-weight: 700;
    line-height: 22.4px;
  }

  .EmptyCart__CartEmptyMsg {
    margin-top: 4px;
    color: rgb(96, 96, 96);
    margin-bottom: 0px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
  }

  .Button {
    background: rgb(49, 27, 146);
    color: rgb(255, 255, 255);
    font-size: 16px;
    padding: 6px 15px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    outline: none;
    height: 48px;
    margin-top: 16px;
    border-radius: 4px;
    font-weight: 600;
    line-height: 22.4px;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
}
</style>