import proxyConsultaCEP from "./proxy.consultacep.subject";

export default function designerPatternProxy(value: string): void {
  console.log(proxyConsultaCEP.newProxyConsultaCEP().consultaCEP(value));
}
