import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={310}
      height={150}
      viewBox="0 0 310 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_143_47)">
        <Path fill="#fff" d="M0 0H310V150H0z" />
        <Path
          d="M38.057 92.09v-1.38c0-.954.196-1.828.588-2.62.4-.802.98-1.44 1.738-1.918.768-.486 1.697-.729 2.787-.729 1.108 0 2.037.243 2.787.729a4.569 4.569 0 011.7 1.918c.384.792.576 1.666.576 2.62v1.38a5.91 5.91 0 01-.588 2.634 4.644 4.644 0 01-1.713 1.918c-.75.477-1.67.716-2.762.716-1.108 0-2.04-.239-2.8-.716a4.734 4.734 0 01-1.725-1.918 5.909 5.909 0 01-.588-2.633zm2.608-1.38v1.38c0 .793.187 1.505.562 2.136.375.622 1.023.933 1.944.933.894 0 1.525-.311 1.892-.933.374-.63.562-1.343.562-2.135v-1.38c0-.793-.179-1.5-.537-2.123-.358-.63-.997-.946-1.918-.946-.894 0-1.538.315-1.93.946-.384.622-.575 1.33-.575 2.122zM25.017 77.108v-1.38c0-.955.196-1.829.588-2.621.4-.802.98-1.44 1.739-1.918.767-.486 1.696-.729 2.787-.729 1.108 0 2.037.243 2.787.729a4.569 4.569 0 011.7 1.918c.383.792.575 1.666.575 2.62v1.381a5.91 5.91 0 01-.588 2.633 4.643 4.643 0 01-1.713 1.918c-.75.477-1.67.716-2.761.716-1.108 0-2.041-.239-2.8-.716a4.734 4.734 0 01-1.726-1.918 5.91 5.91 0 01-.588-2.633zm2.608-1.38v1.38c0 .793.188 1.504.563 2.135.375.622 1.022.933 1.943.933.895 0 1.525-.31 1.892-.933.375-.63.562-1.342.562-2.135v-1.38c0-.793-.179-1.5-.537-2.123-.358-.63-.997-.946-1.917-.946-.895 0-1.539.315-1.93.946-.384.622-.576 1.33-.576 2.122zM25.989 97l18-26.182h2.914L28.903 97H25.99zm28.431 0V70.818h15.802v2.813H57.59v8.846h11.812v2.813H57.591v8.897h12.835V97H54.42zm62.834-12.63v-2.762h15.75v2.761h-15.75zm0 7.567v-2.76h15.75v2.76h-15.75zm74.822-12.391l4.181 7.136 4.182-7.136h3.091l-5.636 8.727L203.53 97h-3.091l-4.182-6.773L192.076 97h-3.091l5.545-8.727-5.545-8.727h3.091zm32.417-5.819V97h-2.818V76.682h-.136l-5.682 3.772v-2.863l5.818-3.864h2.818zm14.284 23.591c-1.712 0-3.17-.466-4.375-1.397-1.204-.94-2.125-2.3-2.761-4.08-.636-1.788-.955-3.947-.955-6.477 0-2.516.319-4.663.955-6.444.644-1.787 1.568-3.151 2.773-4.09 1.212-.947 2.666-1.42 4.363-1.42 1.697 0 3.148.473 4.353 1.42 1.212.939 2.136 2.303 2.772 4.09.644 1.78.966 3.928.966 6.444 0 2.53-.318 4.689-.954 6.477-.637 1.78-1.557 3.14-2.762 4.08-1.204.931-2.663 1.397-4.375 1.397zm0-2.5c1.697 0 3.015-.818 3.955-2.454.939-1.637 1.409-3.97 1.409-7 0-2.016-.216-3.731-.648-5.148-.424-1.417-1.038-2.496-1.841-3.239-.795-.742-1.753-1.113-2.875-1.113-1.681 0-2.996.83-3.943 2.488-.947 1.652-1.42 3.989-1.42 7.012 0 2.015.212 3.727.636 5.136.424 1.41 1.034 2.481 1.83 3.216.803.735 1.769 1.102 2.897 1.102zm20 2.5c-1.712 0-3.17-.466-4.375-1.397-1.204-.94-2.125-2.3-2.761-4.08-.636-1.788-.955-3.947-.955-6.477 0-2.516.319-4.663.955-6.444.644-1.787 1.568-3.151 2.773-4.09 1.212-.947 2.666-1.42 4.363-1.42 1.697 0 3.148.473 4.353 1.42 1.212.939 2.136 2.303 2.772 4.09.644 1.78.966 3.928.966 6.444 0 2.53-.318 4.689-.954 6.477-.637 1.78-1.557 3.14-2.762 4.08-1.204.931-2.663 1.397-4.375 1.397zm0-2.5c1.697 0 3.015-.818 3.955-2.454.939-1.637 1.409-3.97 1.409-7 0-2.016-.216-3.731-.648-5.148-.424-1.417-1.038-2.496-1.841-3.239-.795-.742-1.753-1.113-2.875-1.113-1.681 0-2.996.83-3.943 2.488-.947 1.652-1.42 3.989-1.42 7.012 0 2.015.212 3.727.636 5.136.424 1.41 1.034 2.481 1.83 3.216.803.735 1.769 1.102 2.897 1.102zM76.83 84.546l5.181 14.693h.205l5.182-14.694h2.216L83.204 102h-2.181l-6.41-17.454h2.216zM97.718 102h-5.387V84.546h5.625c1.694 0 3.142.349 4.347 1.048 1.205.693 2.128 1.69 2.77 2.991.642 1.296.963 2.847.963 4.654 0 1.818-.324 3.383-.972 4.696-.647 1.306-1.591 2.312-2.829 3.017-1.239.699-2.745 1.048-4.517 1.048zm-3.273-1.875h3.136c1.444 0 2.64-.278 3.588-.835a5.149 5.149 0 002.123-2.378c.466-1.029.698-2.253.698-3.673 0-1.41-.23-2.623-.69-3.64-.46-1.022-1.148-1.806-2.062-2.352-.915-.551-2.054-.826-3.418-.826h-3.375v13.704zM143.114 85V67.546h10.534v1.874h-8.421v5.898h7.875v1.875h-7.875v5.932h8.557V85h-10.67zm13.5 29V96.546h10.534v1.874h-8.421v5.898h7.875v1.875h-7.875v5.932h8.557V114h-10.67zM156.886 76.364l3.455 9.795h.136l3.455-9.795h1.477L161.136 88h-1.454l-4.273-11.636h1.477zM170.812 88h-3.59V76.364h3.75c1.128 0 2.094.233 2.897.698.803.463 1.419 1.127 1.847 1.995.428.864.642 1.897.642 3.102 0 1.212-.216 2.256-.648 3.13a4.614 4.614 0 01-1.886 2.012c-.826.466-1.83.699-3.012.699zm-2.181-1.25h2.091c.962 0 1.759-.186 2.392-.557a3.43 3.43 0 001.414-1.585c.311-.686.466-1.502.466-2.449 0-.94-.153-1.748-.46-2.426a3.394 3.394 0 00-1.375-1.568c-.61-.368-1.369-.551-2.278-.551h-2.25v9.136z"
          fill="#000"
        />
        <Path stroke="#000" d="M141 91.5L177 91.5" />
        <Path
          d="M72.311 25.273v-.767c0-.53.109-1.016.327-1.456.222-.445.544-.8.966-1.066.426-.27.942-.405 1.548-.405.615 0 1.132.136 1.548.405.417.265.732.62.945 1.066.213.44.32.925.32 1.456v.767c0 .53-.11 1.018-.327 1.463a2.58 2.58 0 01-.952 1.065c-.417.265-.928.398-1.534.398-.615 0-1.134-.133-1.555-.398a2.63 2.63 0 01-.96-1.065 3.283 3.283 0 01-.326-1.463zm1.449-.767v.767c0 .44.104.835.312 1.186.209.346.569.518 1.08.518.497 0 .847-.172 1.051-.518.209-.35.313-.746.313-1.186v-.767c0-.44-.1-.834-.299-1.18-.198-.35-.554-.525-1.065-.525-.497 0-.855.175-1.073.526-.212.345-.32.738-.32 1.179zm-8.693-7.557v-.767c0-.53.109-1.016.327-1.456.222-.445.544-.8.965-1.066.427-.27.943-.404 1.549-.404.615 0 1.131.135 1.548.405.417.265.731.62.945 1.065.213.44.32.925.32 1.456v.767c0 .53-.11 1.018-.328 1.463a2.58 2.58 0 01-.951 1.065c-.417.265-.928.398-1.534.398-.616 0-1.134-.133-1.556-.398a2.63 2.63 0 01-.959-1.065 3.283 3.283 0 01-.326-1.463zm1.449-.767v.767c0 .44.104.836.312 1.186.209.346.568.518 1.08.518.497 0 .847-.172 1.05-.518.21-.35.313-.746.313-1.186v-.767c0-.44-.1-.833-.298-1.18-.199-.35-.554-.525-1.065-.525-.498 0-.855.175-1.073.526-.213.345-.32.739-.32 1.179zM65.606 28l10-14.546h1.62L67.226 28h-1.62zm22.018-14.546L91.942 25.7h.17l4.318-12.245h1.847L92.937 28h-1.82l-5.34-14.546h1.847zm16.108 14.773c-.985 0-1.849-.234-2.593-.703-.738-.469-1.316-1.124-1.733-1.967-.412-.843-.618-1.828-.618-2.955 0-1.136.206-2.128.618-2.976.417-.847.995-1.505 1.733-1.974.744-.469 1.608-.703 2.593-.703.984 0 1.846.234 2.585.703.743.469 1.321 1.127 1.733 1.974.416.848.625 1.84.625 2.976 0 1.127-.209 2.112-.625 2.955-.412.843-.99 1.498-1.733 1.967-.739.469-1.601.703-2.585.703zm0-1.505c.748 0 1.363-.192 1.846-.576a3.392 3.392 0 001.073-1.512 5.792 5.792 0 00.348-2.032c0-.729-.116-1.408-.348-2.038a3.437 3.437 0 00-1.073-1.527c-.483-.388-1.098-.582-1.846-.582-.749 0-1.364.194-1.847.582-.483.388-.84.897-1.073 1.527a5.851 5.851 0 00-.348 2.038c0 .73.116 1.407.348 2.032.233.625.59 1.129 1.073 1.512.483.384 1.098.576 1.847.576zm9.177-13.268V28h-1.676V13.454h1.676zm7.815 3.637v1.42h-5.654v-1.42h5.654zm-4.006-2.614h1.676v10.398c0 .474.069.829.206 1.065.142.232.322.389.54.47.222.075.457.113.703.113.185 0 .336-.01.455-.029l.284-.056.341 1.505a3.453 3.453 0 01-.476.128 3.505 3.505 0 01-.774.071 3.37 3.37 0 01-1.392-.305 2.77 2.77 0 01-1.123-.93c-.293-.417-.44-.943-.44-1.578V14.477zm9.737 13.779c-.691 0-1.318-.13-1.882-.39a3.23 3.23 0 01-1.342-1.144c-.332-.502-.497-1.108-.497-1.819 0-.625.123-1.131.369-1.52.246-.392.575-.7.987-.923a5.195 5.195 0 011.364-.497 16.57 16.57 0 011.513-.27c.662-.085 1.2-.149 1.612-.192.417-.047.72-.125.909-.234.194-.109.291-.298.291-.568v-.057c0-.7-.192-1.245-.575-1.633-.379-.389-.954-.583-1.726-.583-.8 0-1.428.175-1.882.526-.455.35-.774.724-.959 1.122l-1.591-.568c.284-.663.663-1.18 1.137-1.549a4.258 4.258 0 011.562-.78 6.487 6.487 0 011.676-.228c.351 0 .753.042 1.208.128.459.08.902.248 1.328.504.431.256.788.642 1.072 1.158.284.516.426 1.207.426 2.073V28h-1.676v-1.477h-.085c-.114.236-.303.49-.568.76-.265.27-.618.5-1.059.689-.44.189-.977.284-1.612.284zm.256-1.506c.663 0 1.222-.13 1.676-.39.459-.261.805-.597 1.037-1.01.237-.411.355-.844.355-1.299v-1.534c-.071.085-.227.163-.469.234a7.873 7.873 0 01-.823.178c-.308.047-.609.09-.902.128-.289.033-.524.061-.704.085a6.42 6.42 0 00-1.221.277c-.374.123-.677.31-.909.561-.228.246-.341.582-.341 1.009 0 .582.215 1.022.646 1.32.436.294.987.441 1.655.441zm12.207 5.568c-.81 0-1.506-.104-2.088-.312-.582-.204-1.068-.474-1.456-.81a4.41 4.41 0 01-.916-1.065l1.335-.938c.151.199.343.426.575.682.232.26.549.485.952.675.407.194.94.29 1.598.29.881 0 1.607-.212 2.18-.638.573-.426.86-1.094.86-2.003v-2.216h-.142a9.108 9.108 0 01-.526.739c-.222.288-.544.546-.966.774-.416.222-.98.334-1.69.334-.881 0-1.672-.209-2.372-.625-.696-.417-1.248-1.023-1.655-1.819-.403-.795-.604-1.761-.604-2.897 0-1.118.197-2.09.59-2.92.393-.833.94-1.477 1.64-1.931.701-.46 1.511-.69 2.429-.69.711 0 1.274.12 1.691.356.421.232.743.497.966.795.227.294.402.535.525.725h.171V17.09h1.619v11.221c0 .938-.213 1.7-.639 2.287a3.643 3.643 0 01-1.705 1.3c-.71.28-1.501.42-2.372.42zm-.057-5.994c.672 0 1.241-.154 1.705-.462.464-.307.816-.75 1.058-1.328.241-.578.362-1.269.362-2.074 0-.786-.118-1.48-.355-2.08-.237-.602-.587-1.073-1.051-1.414-.464-.341-1.037-.512-1.719-.512-.71 0-1.302.18-1.775.54-.469.36-.822.843-1.059 1.45-.232.605-.348 1.278-.348 2.016 0 .758.119 1.428.355 2.01.242.578.597 1.032 1.066 1.364.473.326 1.06.49 1.761.49zm12.415 1.903c-1.051 0-1.958-.232-2.72-.696a4.67 4.67 0 01-1.755-1.96c-.407-.843-.61-1.823-.61-2.94 0-1.118.203-2.103.61-2.955.412-.857.985-1.524 1.719-2.003.739-.483 1.601-.724 2.585-.724.569 0 1.13.095 1.684.284.554.19 1.058.497 1.512.923.455.422.817.98 1.087 1.676s.405 1.553.405 2.571v.71h-8.409v-1.448h6.704c0-.616-.123-1.165-.369-1.648a2.778 2.778 0 00-1.037-1.143c-.445-.28-.97-.42-1.577-.42-.667 0-1.245.166-1.732.498a3.277 3.277 0 00-1.116 1.278 3.76 3.76 0 00-.39 1.69v.966c0 .824.142 1.523.426 2.096a3.076 3.076 0 001.2 1.3c.512.293 1.106.44 1.783.44.44 0 .838-.062 1.193-.185.36-.128.67-.317.931-.568.26-.256.461-.573.603-.952l1.62.455a3.593 3.593 0 01-.86 1.448 4.182 4.182 0 01-1.491.966c-.592.228-1.257.341-1.996.341zM168.684 28h-4.489V13.454h4.687c1.411 0 2.619.292 3.623.874 1.003.578 1.773 1.409 2.308 2.493.535 1.08.802 2.372.802 3.878 0 1.515-.269 2.82-.809 3.913a5.771 5.771 0 01-2.358 2.514c-1.032.583-2.287.874-3.764.874zm-2.728-1.563h2.614c1.203 0 2.199-.232 2.99-.696a4.285 4.285 0 001.768-1.981c.389-.857.583-1.877.583-3.061 0-1.174-.192-2.185-.575-3.033-.384-.852-.957-1.506-1.719-1.96-.762-.46-1.712-.689-2.848-.689h-2.813v11.42zM178.343 28V17.09h1.619v1.649h.114c.199-.54.558-.978 1.079-1.314a3.178 3.178 0 011.762-.505c.123 0 .277.003.461.008.185.004.325.011.419.02v1.705a5.01 5.01 0 00-.39-.063 3.843 3.843 0 00-.632-.05c-.531 0-1.004.111-1.421.334-.412.217-.739.52-.98.909a2.448 2.448 0 00-.355 1.314V28h-1.676zm11.541.227c-.985 0-1.849-.234-2.592-.703-.739-.469-1.317-1.124-1.733-1.967-.412-.843-.618-1.828-.618-2.955 0-1.136.206-2.128.618-2.976.416-.847.994-1.505 1.733-1.974.743-.469 1.607-.703 2.592-.703.985 0 1.846.234 2.585.703.743.469 1.321 1.127 1.733 1.974.417.848.625 1.84.625 2.976 0 1.127-.208 2.112-.625 2.955-.412.843-.99 1.498-1.733 1.967-.739.469-1.6.703-2.585.703zm0-1.505c.748 0 1.364-.192 1.846-.576a3.392 3.392 0 001.073-1.512 5.792 5.792 0 00.348-2.032c0-.729-.116-1.408-.348-2.038a3.437 3.437 0 00-1.073-1.527c-.482-.388-1.098-.582-1.846-.582s-1.364.194-1.847.582c-.483.388-.84.897-1.072 1.527a5.851 5.851 0 00-.348 2.038c0 .73.116 1.407.348 2.032.232.625.589 1.129 1.072 1.512.483.384 1.099.576 1.847.576zm7.502 5.369v-15h1.619v1.733h.199c.123-.19.293-.431.511-.725.223-.298.54-.563.952-.795.417-.237.98-.355 1.69-.355.919 0 1.728.23 2.429.689.701.46 1.248 1.11 1.641 1.953s.589 1.837.589 2.983c0 1.155-.196 2.157-.589 3.004-.393.843-.938 1.496-1.634 1.96-.696.46-1.498.69-2.407.69-.701 0-1.262-.117-1.684-.349-.421-.237-.745-.504-.973-.802a10.777 10.777 0 01-.525-.753h-.142v5.767h-1.676zm1.647-9.546c0 .824.121 1.551.363 2.18.241.626.594 1.116 1.058 1.471.464.35 1.032.526 1.704.526.701 0 1.286-.185 1.755-.554.473-.374.828-.876 1.065-1.506.241-.634.362-1.34.362-2.116 0-.768-.118-1.459-.355-2.074-.232-.62-.585-1.11-1.058-1.47-.469-.365-1.058-.547-1.769-.547-.681 0-1.254.172-1.718.518-.464.34-.815.82-1.052 1.435-.236.61-.355 1.323-.355 2.137zM215.198 28V17.09h1.676V28h-1.676zm.852-12.727c-.326 0-.608-.111-.845-.334a1.072 1.072 0 01-.348-.803c0-.312.116-.58.348-.802.237-.223.519-.334.845-.334.327 0 .606.111.838.334.237.222.356.49.356.802 0 .313-.119.58-.356.803a1.166 1.166 0 01-.838.334zm11.622 4.261l-1.506.426a2.824 2.824 0 00-.419-.731 2.032 2.032 0 00-.739-.597c-.312-.156-.712-.234-1.2-.234-.668 0-1.224.154-1.669.461-.44.303-.661.69-.661 1.158 0 .417.152.746.455.987.303.242.776.443 1.42.604l1.62.398c.975.236 1.702.599 2.18 1.086.478.483.717 1.106.717 1.868 0 .625-.18 1.184-.539 1.676-.356.493-.853.881-1.492 1.165-.639.284-1.382.426-2.23.426-1.113 0-2.034-.241-2.763-.724-.729-.483-1.191-1.189-1.385-2.117l1.591-.397c.152.587.438 1.027.86 1.32.426.294.982.441 1.669.441.781 0 1.401-.166 1.86-.497.464-.336.696-.739.696-1.207 0-.38-.132-.697-.397-.952-.265-.26-.673-.455-1.222-.583l-1.818-.426c-.999-.236-1.733-.604-2.202-1.1-.464-.502-.696-1.13-.696-1.883 0-.615.173-1.16.519-1.633.35-.474.826-.845 1.427-1.115.606-.27 1.293-.405 2.06-.405 1.079 0 1.927.237 2.542.71.621.474 1.061 1.099 1.322 1.875zM80.714 52.227c-1.023 0-1.903-.241-2.642-.724-.739-.483-1.307-1.148-1.705-1.996-.397-.847-.596-1.816-.596-2.905 0-1.108.203-2.085.61-2.933.412-.852.985-1.517 1.72-1.996.738-.483 1.6-.724 2.585-.724.767 0 1.458.142 2.073.426.616.284 1.12.682 1.513 1.193a3.72 3.72 0 01.732 1.79h-1.676c-.128-.497-.412-.938-.853-1.321-.435-.388-1.022-.582-1.761-.582-.653 0-1.226.17-1.719.51-.488.337-.869.813-1.143 1.428-.27.611-.405 1.329-.405 2.152 0 .843.132 1.577.398 2.202.27.625.648 1.11 1.136 1.456.492.346 1.07.519 1.733.519.436 0 .83-.076 1.186-.228.355-.151.656-.369.902-.653.246-.284.421-.625.526-1.023h1.676a3.882 3.882 0 01-.703 1.74c-.37.512-.86.919-1.47 1.222-.607.298-1.312.447-2.117.447zm9.95.029c-.691 0-1.318-.13-1.882-.39a3.23 3.23 0 01-1.342-1.144c-.332-.502-.497-1.108-.497-1.819 0-.625.123-1.131.369-1.52.246-.393.575-.7.987-.923a5.19 5.19 0 011.364-.497 16.584 16.584 0 011.513-.27c.662-.085 1.2-.149 1.612-.192.416-.047.72-.125.909-.234.194-.109.291-.298.291-.568v-.057c0-.7-.192-1.245-.575-1.634-.379-.388-.954-.582-1.726-.582-.8 0-1.428.175-1.882.526-.455.35-.774.724-.959 1.122l-1.59-.568c.283-.663.662-1.18 1.135-1.549.479-.374 1-.634 1.563-.78a6.488 6.488 0 011.676-.228c.35 0 .753.043 1.208.128.459.08.902.248 1.328.504.43.256.788.641 1.072 1.158.284.516.426 1.207.426 2.074V52h-1.676v-1.477h-.085c-.114.236-.303.49-.568.76-.265.27-.618.5-1.058.689-.44.189-.978.284-1.613.284zm.256-1.506c.663 0 1.221-.13 1.676-.39.46-.261.805-.597 1.037-1.01a2.57 2.57 0 00.355-1.299v-1.534c-.07.085-.227.163-.469.234a7.911 7.911 0 01-.824.178 37.814 37.814 0 01-1.605.213c-.435.057-.842.15-1.221.277-.374.123-.677.31-.91.561-.227.246-.34.583-.34 1.009 0 .582.215 1.022.646 1.32.436.294.987.441 1.655.441zm9.48-13.295V52h-1.677V37.455h1.677zm7.501 14.772c-1.022 0-1.903-.241-2.642-.724-.738-.483-1.306-1.148-1.704-1.996-.398-.847-.597-1.816-.597-2.905 0-1.108.204-2.085.611-2.933.412-.852.985-1.517 1.719-1.996.738-.483 1.6-.724 2.585-.724.767 0 1.458.142 2.074.426.615.284 1.12.682 1.513 1.193.393.512.637 1.108.731 1.79h-1.676c-.128-.497-.412-.938-.852-1.321-.436-.388-1.023-.582-1.762-.582-.653 0-1.226.17-1.718.51-.488.337-.869.813-1.144 1.428-.27.611-.405 1.329-.405 2.152 0 .843.133 1.577.398 2.202.27.625.649 1.11 1.137 1.456.492.346 1.07.519 1.732.519a3 3 0 001.187-.228c.355-.151.655-.369.902-.653.246-.284.421-.625.525-1.023h1.676a3.875 3.875 0 01-.703 1.74 3.924 3.924 0 01-1.47 1.222c-.606.298-1.312.447-2.117.447zm13.616-4.687v-6.45h1.676V52h-1.676v-1.847h-.114a3.588 3.588 0 01-1.193 1.414c-.54.383-1.222.575-2.046.575-.682 0-1.288-.15-1.818-.447-.53-.303-.947-.758-1.25-1.364-.303-.61-.454-1.38-.454-2.308V41.09h1.676v6.818c0 .796.222 1.43.667 1.904.45.473 1.023.71 1.719.71.417 0 .84-.107 1.271-.32.436-.213.801-.54 1.094-.98.298-.44.448-1.001.448-1.683zm6.422-10.085V52h-1.676V37.455h1.676zm6.28 14.8c-.691 0-1.319-.13-1.882-.39a3.232 3.232 0 01-1.343-1.143c-.331-.502-.497-1.108-.497-1.819 0-.625.123-1.131.37-1.52.246-.393.575-.7.987-.923a5.182 5.182 0 011.364-.497 16.549 16.549 0 011.512-.27c.663-.085 1.201-.149 1.613-.192.416-.047.719-.125.909-.234.194-.109.291-.298.291-.568v-.057c0-.7-.192-1.245-.575-1.634-.379-.388-.955-.582-1.726-.582-.801 0-1.428.175-1.882.526-.455.35-.775.724-.959 1.122l-1.591-.568c.284-.663.663-1.18 1.136-1.549a4.255 4.255 0 011.563-.78 6.487 6.487 0 011.676-.228c.35 0 .753.043 1.207.128.46.08.902.248 1.328.504.431.256.789.641 1.073 1.158.284.516.426 1.207.426 2.074V52h-1.676v-1.477h-.085c-.114.236-.303.49-.569.76-.265.27-.618.5-1.058.689-.44.189-.978.284-1.612.284zm.256-1.505c.662 0 1.221-.13 1.676-.39.459-.261.805-.597 1.037-1.01.236-.411.355-.844.355-1.299v-1.534c-.071.085-.227.163-.469.234a7.896 7.896 0 01-.824.178 37.67 37.67 0 01-1.605.213c-.436.057-.843.15-1.222.277-.374.123-.677.31-.909.561-.227.246-.341.583-.341 1.009 0 .582.216 1.022.647 1.32.435.294.987.441 1.655.441zm12.548-9.66v1.421h-5.654v-1.42h5.654zm-4.006-2.613h1.676v10.398c0 .474.069.829.206 1.065.142.232.322.389.54.47.222.075.457.113.703.113.185 0 .336-.01.454-.029l.285-.056.34 1.505a3.393 3.393 0 01-.475.128 3.508 3.508 0 01-.775.071c-.473 0-.937-.102-1.392-.305a2.774 2.774 0 01-1.122-.93c-.293-.417-.44-.943-.44-1.577V38.477zm10.984 13.75c-1.052 0-1.958-.232-2.721-.696a4.675 4.675 0 01-1.754-1.96c-.407-.843-.611-1.823-.611-2.94 0-1.118.204-2.103.611-2.955.412-.857.985-1.525 1.719-2.003.738-.483 1.6-.724 2.585-.724a5.17 5.17 0 011.683.284c.554.19 1.059.497 1.513.923.455.422.817.98 1.087 1.676s.405 1.553.405 2.571v.71h-8.41v-1.448h6.705c0-.616-.123-1.165-.369-1.648a2.785 2.785 0 00-1.037-1.143c-.445-.28-.971-.42-1.577-.42-.668 0-1.245.166-1.733.498a3.266 3.266 0 00-1.115 1.278 3.762 3.762 0 00-.391 1.69v.966c0 .824.142 1.523.427 2.095a3.064 3.064 0 001.2 1.3c.511.294 1.105.44 1.783.44.44 0 .838-.061 1.193-.184.36-.128.67-.317.93-.568.261-.256.462-.573.604-.952l1.619.455a3.59 3.59 0 01-.859 1.448c-.403.412-.9.734-1.492.966-.592.228-1.257.341-1.995.341zm11.186 0c-.909 0-1.712-.23-2.408-.689-.696-.464-1.241-1.117-1.634-1.96-.393-.847-.589-1.849-.589-3.004 0-1.146.196-2.14.589-2.983.393-.843.94-1.494 1.641-1.953.701-.46 1.51-.69 2.429-.69.71 0 1.271.12 1.683.356.417.232.734.497.952.795.223.294.395.536.518.725h.142v-5.37h1.677V52h-1.62v-1.676h-.199c-.123.199-.298.45-.525.753-.227.298-.552.566-.973.802-.422.232-.983.348-1.683.348zm.227-1.505c.672 0 1.24-.176 1.704-.526.464-.355.817-.845 1.059-1.47.241-.63.362-1.357.362-2.18 0-.815-.118-1.527-.355-2.138-.237-.616-.587-1.094-1.051-1.435-.464-.346-1.037-.518-1.719-.518-.71 0-1.302.182-1.776.546-.468.36-.821.85-1.058 1.47-.232.616-.348 1.307-.348 2.075 0 .776.118 1.482.355 2.116.242.63.597 1.132 1.066 1.506.473.369 1.06.554 1.761.554zM179.341 52V37.455h1.677v5.369h.142c.123-.19.293-.431.511-.725.223-.298.54-.563.952-.795.416-.237.98-.355 1.69-.355.919 0 1.728.23 2.429.689.701.46 1.248 1.11 1.641 1.953s.589 1.837.589 2.983c0 1.155-.196 2.157-.589 3.004-.393.843-.938 1.496-1.634 1.96-.696.46-1.498.69-2.408.69-.7 0-1.261-.117-1.683-.349-.421-.236-.746-.504-.973-.802a10.777 10.777 0 01-.525-.753h-.199V52h-1.62zm1.648-5.455c0 .824.121 1.551.362 2.18.242.626.595 1.116 1.059 1.471.464.35 1.032.526 1.704.526.701 0 1.286-.185 1.754-.554.474-.374.829-.876 1.066-1.506.241-.634.362-1.34.362-2.117 0-.767-.118-1.458-.355-2.073-.232-.62-.585-1.11-1.058-1.47-.469-.365-1.059-.547-1.769-.547-.682 0-1.255.172-1.719.518-.464.34-.814.82-1.051 1.435-.236.61-.355 1.323-.355 2.137zm11.236 9.546a3.68 3.68 0 01-.76-.071 2.008 2.008 0 01-.462-.128l.427-1.477c.407.104.767.142 1.079.113.313-.028.59-.168.831-.419.246-.246.471-.646.675-1.2l.312-.852-4.034-10.966h1.818l3.012 8.693h.113l3.012-8.693h1.818l-4.631 12.5c-.208.563-.466 1.03-.774 1.4a2.903 2.903 0 01-1.072.83 3.31 3.31 0 01-1.364.27zm11.275-3.977a1.23 1.23 0 01-.902-.377 1.23 1.23 0 01-.377-.902c0-.35.126-.65.377-.902a1.23 1.23 0 01.902-.376c.35 0 .651.125.902.376s.376.552.376.902c0 .232-.059.445-.177.64-.114.194-.268.35-.462.468-.189.114-.402.17-.639.17zm0-8.097a1.23 1.23 0 01-.902-.376 1.23 1.23 0 01-.377-.902c0-.35.126-.651.377-.902a1.23 1.23 0 01.902-.377c.35 0 .651.126.902.377.251.25.376.551.376.902 0 .232-.059.445-.177.639-.114.194-.268.35-.462.469-.189.113-.402.17-.639.17z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_143_47">
          <Path fill="#fff" d="M0 0H310V150H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent