<template>
  <div class="products">
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
      <div data-testid="no-products" class="NoProducts__NoResult">Belum ada
        produk di toko ini, cek lagi nanti!</div>
    </div>
    <Footer-component />
    <div class="StoreCtnr__BottomFixed">
      <div id="contact" class="ContactMerchant__Container">
        <div class="BottomRightFloat__Container"><a href="https://wa.me/+6283824253182" id="contact_via_whatsApp_element"
            class="WhatsAppShare__Link"><svg class="WhatsAppShare__StyledWhatsappIcon-sc-19pujxk-1 eohqdW" width="24"
              height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 4a8 8 0 0 0-7.169 11.555 1 1 0 1 1-1.791.89A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.963 9.963 0 0 1-4.445-1.04 1 1 0 0 1 .89-1.791A8 8 0 1 0 12 4z"
                fill="#BFBFBF"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.263 15.035a1 1 0 0 1 .702 1.228l-1.04 3.812 3.812-1.04a1 1 0 0 1 .526 1.93l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 1.228-.702z"
                fill="#BFBFBF"></path>
              <path
                d="M14.862 12.846c.227.083 1.444.682 1.692.806s.413.186.475.29c.062.103.062.598-.145 1.177-.206.578-1.195 1.106-1.671 1.177-.427.064-.967.09-1.56-.098-.36-.114-.82-.266-1.412-.522-2.484-1.072-4.106-3.573-4.23-3.739l-.002-.003C7.877 11.76 7 10.588 7 9.376c0-1.22.64-1.818.867-2.066a.91.91 0 0 1 .66-.31c.165 0 .33.001.475.009.152.007.356-.058.557.425.206.496.701 1.715.763 1.838.062.124.104.269.02.434-.082.165-.35.514-.618.847-.11.137-.253.258-.109.506.145.248.642 1.058 1.378 1.715.946.844 1.744 1.105 1.991 1.23.248.123.392.102.537-.063.144-.165.619-.723.784-.97.165-.248.33-.207.557-.125z"
                fill="#BFBFBF"></path>
            </svg></a></div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterComponent from '@/components/footer/FooterComponent.vue';
export default {
  name: 'CartView',
  components: {
    FooterComponent
  }
}
</script>
<style scoped lang="scss">
.products {
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
}

.StoreCtnr__BottomFixed {
  position: fixed;
  flex-direction: column;
  display: flex;
  bottom: 30px;
  z-index: 1000;
  max-width: 500px;
  width: 100%;
  pointer-events: none;

  .BottomRightFloat__Container {
    width: 48px;
    height: 48px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px;
    border-radius: 50%;
    float: right;
    margin-right: 15px;
    margin-bottom: 8px;
    pointer-events: auto;

    .WhatsAppShare__Link {
      display: flex;
      height: 100%;
      background: rgb(49, 223, 87);
      border-radius: 50%;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;

      path {
        fill: white;
      }
    }
  }
}</style>