import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={737}
      height={126}
      viewBox="0 0 737 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_132_3)">
        <Path fill="#fff" d="M0 0H737V126H0z" />
        <Path
          d="M27.318 93h-8.864l25.637-69.818h8.727L78.454 93h-8.863L48.727 34.227h-.545L27.318 93zm3.273-27.273h35.727v7.5H30.591v-7.5zm87.92-14.045v-7.364h42v7.364h-42zm0 20.182V64.5h42v7.364h-42zm89.873-13.773c0-8.591 1.113-16.489 3.34-23.693 2.25-7.228 5.455-13.875 9.614-19.944h7.091c-1.636 2.25-3.17 5.023-4.602 8.319-1.409 3.273-2.648 6.875-3.716 10.807a102.52 102.52 0 00-2.523 12.136 88.354 88.354 0 00-.886 12.375c0 5.409.522 10.898 1.568 16.466 1.045 5.568 2.454 10.739 4.227 15.511 1.773 4.773 3.75 8.66 5.932 11.659h-7.091c-4.159-6.068-7.364-12.704-9.614-19.909-2.227-7.227-3.34-15.136-3.34-23.727zm265.099 5.454c0 8.591-1.125 16.5-3.375 23.728-2.227 7.204-5.42 13.841-9.58 19.909h-7.09c1.636-2.25 3.159-5.023 4.568-8.318 1.432-3.273 2.682-6.864 3.75-10.773a99.5 99.5 0 002.488-12.17c.614-4.205.921-8.33.921-12.376 0-5.409-.523-10.897-1.568-16.465-1.046-5.569-2.455-10.74-4.228-15.512-1.772-4.773-3.75-8.659-5.931-11.659h7.09c4.16 6.068 7.353 12.716 9.58 19.943 2.25 7.205 3.375 15.103 3.375 23.694zm20.463 0c0-8.59 1.114-16.488 3.341-23.693 2.25-7.227 5.454-13.875 9.614-19.943h7.09c-1.636 2.25-3.17 5.023-4.602 8.318-1.409 3.273-2.648 6.875-3.716 10.807a102.316 102.316 0 00-2.522 12.136 88.357 88.357 0 00-.887 12.375c0 5.41.523 10.898 1.568 16.466 1.046 5.569 2.455 10.739 4.228 15.512 1.772 4.772 3.75 8.659 5.931 11.659h-7.09c-4.16-6.068-7.364-12.705-9.614-19.91-2.227-7.227-3.341-15.136-3.341-23.727zm103.099 0c0 8.591-1.125 16.5-3.375 23.728-2.227 7.204-5.42 13.841-9.579 19.909H577c1.636-2.25 3.159-5.023 4.568-8.318C583 95.59 584.25 92 585.318 88.09a99.502 99.502 0 002.489-12.17c.613-4.205.92-8.33.92-12.376 0-5.409-.522-10.897-1.568-16.465-1.045-5.569-2.454-10.74-4.227-15.512-1.773-4.773-3.75-8.659-5.932-11.659h7.091c4.159 6.068 7.352 12.716 9.579 19.943 2.25 7.205 3.375 15.103 3.375 23.694zm20.464 0c0-8.59 1.113-16.488 3.34-23.693 2.25-7.227 5.455-13.875 9.614-19.943h7.091c-1.636 2.25-3.17 5.023-4.602 8.318-1.409 3.273-2.648 6.875-3.716 10.807a102.516 102.516 0 00-2.523 12.136 88.354 88.354 0 00-.886 12.375c0 5.41.522 10.898 1.568 16.466 1.045 5.569 2.454 10.739 4.227 15.512 1.773 4.772 3.75 8.659 5.932 11.659h-7.091c-4.159-6.068-7.364-12.705-9.614-19.91-2.227-7.227-3.34-15.136-3.34-23.727zm103.099 0c0 8.591-1.125 16.5-3.375 23.728-2.227 7.204-5.42 13.841-9.58 19.909h-7.091c1.637-2.25 3.16-5.023 4.569-8.318 1.432-3.273 2.682-6.864 3.75-10.773a99.5 99.5 0 002.488-12.17c.614-4.205.921-8.33.921-12.376 0-5.409-.523-10.897-1.568-16.465-1.046-5.569-2.455-10.74-4.228-15.512-1.772-4.773-3.75-8.659-5.932-11.659h7.091c4.16 6.068 7.353 12.716 9.58 19.943 2.25 7.205 3.375 15.103 3.375 23.694zM242.773 50h-2.955l8.546-23.273h2.909L259.818 50h-2.954l-6.955-19.59h-.182L242.773 50zm1.091-9.09h11.909v2.5h-11.909v-2.5zM263.443 50V26.727h2.818v10.364h12.409V26.727h2.819V50h-2.819V39.59h-12.409V50h-2.818zm34.324-17.455l4.182 7.137 4.182-7.137h3.091l-5.637 8.728L309.222 50h-3.091l-4.182-6.773L297.767 50h-3.091l5.546-8.727-5.546-8.728h3.091zm32.418-5.818V50h-2.819V29.682h-.136l-5.682 3.773V30.59l5.818-3.864h2.819zm7.318 23.455c-.561 0-1.042-.2-1.443-.602a1.967 1.967 0 01-.603-1.444c0-.56.201-1.041.603-1.443a1.967 1.967 0 011.443-.602c.56 0 1.042.2 1.443.602.402.402.602.883.602 1.443 0 .372-.094.712-.284 1.023-.182.31-.428.56-.738.75a1.95 1.95 0 01-1.023.273zm12.213-23.455V50h-2.818V29.682h-.137l-5.681 3.773V30.59l5.818-3.864h2.818zM286.818 89V65.727h2.818v10.364h12.409V65.727h2.819V89h-2.819V78.59h-12.409V89h-2.818zM384.909 70.864v-22.5h3.818v22.5h-3.818zm-9.341-9.341v-3.819h22.5v3.819h-22.5zM420.368 77V42.09h4.227v31.16h16.227V77h-20.454zM661.04 24.818V51h-3.171V28.142h-.153l-6.392 4.244v-3.221l6.545-4.347h3.171zM642.17 95V68.818h3.171v12.989h.307l11.761-12.989h4.142l-10.994 11.813L661.551 95h-3.835l-9.102-12.17-3.273 3.681V95h-3.171zM535.04 24.818V51h-3.171V28.142h-.153l-6.392 4.244v-3.221l6.545-4.347h3.171zM516.17 95V68.818h3.171v12.989h.307l11.761-12.989h4.142l-10.994 11.813L535.551 95h-3.835l-9.102-12.17-3.273 3.681V95h-3.171zM550.619 84.454V99h-1.761V86.301h-.085l-3.551 2.358v-1.79l3.636-2.415h1.761zM672.506 99v-1.278l4.801-5.256a33.859 33.859 0 001.392-1.605c.364-.46.634-.89.81-1.293.179-.407.269-.833.269-1.278 0-.512-.123-.954-.369-1.328a2.395 2.395 0 00-.994-.867 3.226 3.226 0 00-1.421-.305c-.558 0-1.046.116-1.463.348a2.4 2.4 0 00-.959.959c-.222.412-.333.895-.333 1.449h-1.677c0-.853.197-1.6.59-2.245a4.096 4.096 0 011.605-1.505c.682-.36 1.447-.54 2.294-.54.852 0 1.608.18 2.266.54.658.36 1.174.845 1.548 1.455.374.611.561 1.29.561 2.039 0 .535-.097 1.058-.291 1.57-.189.506-.521 1.072-.994 1.697-.469.62-1.12 1.378-1.953 2.272l-3.268 3.495v.114h6.762V99h-9.176z"
          fill="#000"
        />
        <Path stroke="#000" strokeWidth={3} d="M233 55.5L359 55.5" />
        <Path stroke="#000" strokeWidth={3} d="M508 58.5L570 58.5" />
        <Path stroke="#000" strokeWidth={3} d="M630 58.5L692 58.5" />
      </G>
      <Defs>
        <ClipPath id="clip0_132_3">
          <Path fill="#fff" d="M0 0H737V126H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent