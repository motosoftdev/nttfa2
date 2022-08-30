import * as React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={75}
      height={79}
      viewBox="0 0 75 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" d="M0 0H75V79H0z" />
      <G clipPath="url(#clip0_215_3)">
        <Path
          d="M55.5 72.344h-36L1.5 39.5l18-32.844h36l18 32.844-18 32.844z"
          stroke="#000"
          strokeWidth={5}
          strokeMiterlimit={8}
        />
        <Path
          d="M19.213 34.934c-.196 0-.387.006-.575.017v6.147c0 .086.02.156.06.21.054.067.16.118.316.153.156.031.386.047.691.047.27 0 .547-.065.832-.194.289-.132.553-.332.791-.597.238-.27.434-.608.586-1.014.152-.406.228-.885.228-1.435 0-.52-.064-.985-.193-1.395a2.854 2.854 0 00-.568-1.049 2.391 2.391 0 00-.92-.662 3.204 3.204 0 00-1.248-.228zm3.925 3.105c0 .488-.05.926-.152 1.313-.098.382-.23.722-.398 1.02a3.16 3.16 0 01-.586.75 3.39 3.39 0 01-.697.503 3.157 3.157 0 01-1.47.375H16.85v-.252c.266-.055.473-.113.622-.176.152-.066.228-.127.228-.181v-6.352a31.676 31.676 0 00-.85.117l-.052-.363c.172-.047.369-.092.591-.135.227-.043.465-.08.715-.111.25-.035.502-.06.756-.076.258-.02.502-.03.733-.03.543 0 1.033.082 1.47.246a2.979 2.979 0 011.823 1.835c.168.445.252.95.252 1.517zm3.44-1.049c-.203 0-.39.04-.563.117-.168.078-.318.19-.45.334-.13.141-.239.311-.329.51a2.522 2.522 0 00-.181.65h2.507c.09 0 .149-.013.176-.04.031-.032.047-.088.047-.17a2.07 2.07 0 00-.047-.393 1.319 1.319 0 00-.176-.463 1.123 1.123 0 00-.369-.387c-.156-.105-.361-.158-.615-.158zm2.168 1.746a1.11 1.11 0 01-.281.217 3.117 3.117 0 01-.364.176H25.02c.004.305.045.596.123.873.082.273.198.516.346.726.152.207.334.374.545.499.215.125.455.187.72.187.122 0 .24-.008.352-.023a1.52 1.52 0 00.375-.106 2.65 2.65 0 00.44-.24c.164-.105.355-.248.574-.428.05.028.094.067.129.117.039.051.068.092.088.123a9.532 9.532 0 01-.692.692c-.195.172-.38.304-.556.398a1.601 1.601 0 01-.516.182 3.01 3.01 0 01-.55.047c-.301 0-.588-.065-.862-.194a2.234 2.234 0 01-.715-.544 2.787 2.787 0 01-.498-.856 3.299 3.299 0 01-.181-1.125 3.428 3.428 0 01.34-1.494c.113-.227.25-.436.41-.627.16-.191.341-.358.544-.498.086-.059.182-.115.288-.17a2.658 2.658 0 01.685-.252c.117-.027.229-.041.334-.041.254 0 .48.035.68.105a1.723 1.723 0 01.896.704c.102.156.184.322.246.498.067.175.114.355.141.539.027.18.041.351.041.515zm4.43 2.579a6.47 6.47 0 01-.569.375 5.782 5.782 0 01-.539.269c-.168.07-.324.123-.468.158a1.457 1.457 0 01-.37.059c-.136 0-.267-.026-.392-.076a.84.84 0 01-.323-.247 1.315 1.315 0 01-.222-.456 2.506 2.506 0 01-.082-.692v-3.598h-.756l-.123-.164.457-.392h.422v-1.442l.697-.609.182.147v1.904h1.916l.17.17c-.035.054-.08.113-.135.176a2.298 2.298 0 01-.322.328.519.519 0 01-.135.087 1.988 1.988 0 00-.428-.134 3.322 3.322 0 00-.762-.07h-.304V40.2c0 .234.01.43.029.586.023.156.06.281.111.375.051.09.116.154.194.194a.692.692 0 00.299.058c.136 0 .308-.027.515-.082.207-.055.463-.16.768-.316l.17.299zm3.082-4.325c-.203 0-.39.04-.563.117-.168.078-.318.19-.451.334-.129.141-.238.311-.328.51a2.522 2.522 0 00-.182.65h2.508c.09 0 .149-.013.176-.04.031-.032.047-.088.047-.17 0-.106-.016-.237-.047-.393a1.317 1.317 0 00-.176-.463 1.123 1.123 0 00-.37-.387c-.155-.105-.36-.158-.614-.158zm2.168 1.746c-.07.079-.164.15-.282.217a3.117 3.117 0 01-.363.176H34.7c.004.305.045.596.123.873.082.273.197.516.346.726.152.207.334.374.545.499.215.125.455.187.72.187.122 0 .239-.008.352-.023a1.52 1.52 0 00.375-.106c.133-.054.28-.135.44-.24a6.3 6.3 0 00.574-.428c.05.028.093.067.129.117.039.051.068.092.088.123a9.532 9.532 0 01-.692.692c-.195.172-.38.304-.556.398a1.601 1.601 0 01-.516.182 3.01 3.01 0 01-.551.047c-.3 0-.588-.065-.861-.194a2.234 2.234 0 01-.715-.544 2.785 2.785 0 01-.498-.856 3.299 3.299 0 01-.182-1.125 3.428 3.428 0 01.34-1.494c.113-.227.25-.436.41-.627.16-.191.342-.358.545-.498.086-.059.182-.115.287-.17a2.658 2.658 0 01.686-.252c.117-.027.228-.041.334-.041.254 0 .48.035.68.105a1.723 1.723 0 01.896.704c.102.156.184.322.246.498.066.175.113.355.14.539.028.18.042.351.042.515zm5.39 2.15c-.254.301-.478.538-.674.71-.191.168-.369.297-.533.386a1.414 1.414 0 01-.48.159 3.437 3.437 0 01-.51.035c-.285 0-.564-.063-.838-.188a2.262 2.262 0 01-.72-.55c-.212-.239-.381-.53-.51-.873a3.397 3.397 0 01-.188-1.167c0-.421.076-.816.229-1.183a2.96 2.96 0 011.582-1.6c.363-.16.756-.24 1.177-.24.13 0 .26.012.393.035.137.02.266.05.387.094.125.039.238.088.34.146a.957.957 0 01.257.188.552.552 0 01-.017.2c-.02.085-.047.177-.082.275a3.448 3.448 0 01-.117.275 2.307 2.307 0 01-.118.21l-.216-.058a.965.965 0 00-.153-.228 1.448 1.448 0 00-.674-.416 1.666 1.666 0 00-.527-.077c-.207 0-.406.047-.598.141-.187.09-.355.227-.504.41a2.217 2.217 0 00-.351.686 3.212 3.212 0 00-.129.96c0 .333.049.636.147.909.101.27.234.5.398.691.168.192.36.34.574.446.219.101.446.152.68.152.11 0 .21-.004.305-.012.093-.011.195-.043.304-.093.114-.051.242-.127.387-.229.148-.102.332-.246.55-.433l.23.24zm4.29.428c-.192.141-.382.266-.569.376a5.782 5.782 0 01-.54.269c-.167.07-.323.123-.468.158a1.458 1.458 0 01-.369.059c-.137 0-.267-.026-.392-.076a.838.838 0 01-.323-.247 1.313 1.313 0 01-.223-.456 2.502 2.502 0 01-.081-.692v-3.598h-.756l-.123-.164.457-.392h.422v-1.442l.697-.609.181.147v1.904h1.916l.17.17c-.035.054-.08.113-.134.176a2.298 2.298 0 01-.323.328.518.518 0 01-.135.087 1.984 1.984 0 00-.427-.134 3.322 3.322 0 00-.762-.07h-.305V40.2c0 .234.01.43.03.586.023.156.06.281.111.375.05.09.115.154.193.194a.692.692 0 00.3.058c.136 0 .308-.027.515-.082.207-.055.463-.16.767-.316l.17.299zm4.833-1.98c0-.309-.05-.602-.152-.879a2.762 2.762 0 00-.393-.738 1.97 1.97 0 00-.544-.51 1.146 1.146 0 00-.604-.188c-.297 0-.547.057-.75.17-.203.114-.367.27-.492.47a2.108 2.108 0 00-.264.697c-.055.269-.082.56-.082.872 0 .31.055.604.164.885.11.278.246.522.41.733.168.21.352.379.551.504.2.12.389.181.568.181.278 0 .516-.05.715-.152.2-.106.364-.254.492-.445a2.06 2.06 0 00.288-.692c.062-.27.093-.572.093-.908zm.908-.176c0 .262-.033.518-.1.768a3.38 3.38 0 01-.696 1.33 2.91 2.91 0 01-.545.486 2.427 2.427 0 01-.627.317 2.35 2.35 0 01-1.7-.094 2.333 2.333 0 01-.767-.58 2.672 2.672 0 01-.492-.88 3.482 3.482 0 01-.076-1.868c.066-.25.156-.487.27-.71a3.25 3.25 0 01.415-.62 2.649 2.649 0 011.178-.814c.23-.079.467-.118.709-.118.367 0 .7.07.996.21.3.142.557.337.768.587.214.246.379.539.492.879.117.34.175.709.175 1.107zm4.981-2.566c.035.023.05.092.047.205 0 .113-.016.244-.047.393a4.32 4.32 0 01-.252.85h-.252a1.846 1.846 0 00-.1-.4.803.803 0 00-.152-.257.456.456 0 00-.187-.14.489.489 0 00-.211-.048.597.597 0 00-.305.112 1.41 1.41 0 00-.352.34c-.12.152-.242.35-.363.591a5.07 5.07 0 00-.316.856v2.297c0 .058.072.119.217.181.148.063.406.121.773.176V42h-2.69v-.252c.258-.058.46-.115.604-.17.145-.059.217-.121.217-.187v-3.41c0-.13-.004-.237-.012-.323a1.817 1.817 0 00-.03-.217.408.408 0 00-.046-.129.44.44 0 00-.047-.076.308.308 0 00-.094-.064.404.404 0 00-.129-.047 8.433 8.433 0 00-.463-.047v-.234c.255-.067.503-.133.745-.2.246-.07.466-.16.662-.269l.205.205.076 1.33a5.92 5.92 0 01.34-.603c.125-.188.258-.35.398-.487.141-.14.287-.25.44-.328.156-.078.318-.117.486-.117.125 0 .26.016.404.047.145.031.29.088.434.17z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_215_3">
          <Path fill="#fff" d="M0 0H75V79H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent