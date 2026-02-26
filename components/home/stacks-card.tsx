"use client"

import Marquee from "react-fast-marquee"
import {
  SiCloudflare,
  SiCss,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSpringboot,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiDigitalocean,
  SiFlutter,
  SiDart,
  SiAndroidstudio
} from "@icons-pack/react-simple-icons"

import { ZapIcon } from "lucide-react"

const StacksCard = () => {
  return (
    <div className="shadow-feature-card flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6">
      
      <div className="flex items-center gap-2">
        <ZapIcon className="size-[18px]" />
        <h2 className="text-sm">Stacks</h2>
      </div>

      {/* Top Row */}
      <Marquee pauseOnHover speed={25} className="py-4">
        <div className="flex gap-4 pl-4">
          <SiFlutter className="size-10" />
          <SiDart className="size-10" />
          <SiAndroidstudio className="size-10" />
          <SiFirebase className="size-10" />
          <SiReact className="size-10" />
          <SiNextdotjs className="size-10" />
        
          <SiJavascript className="size-10" />
          <SiHtml5 className="size-10" />
          <SiCss className="size-10" />
        
        </div>
      </Marquee>

      {/* Bottom Row */}
      <Marquee pauseOnHover speed={25} direction="right" className="py-4">
        <div className="flex gap-4 pl-4">
         
          <SiMysql className="size-10" />
          <SiPostgresql className="size-10" />
          <SiNodedotjs className="size-10" />
          <SiPython className="size-10" />
          <SiGit className="size-10" />
          <SiBootstrap className="size-10" />
          <SiCloudflare className="size-10" />
        
          <SiFigma className="size-10" />
        </div>
      </Marquee>

    </div>
  )
}

export default StacksCard