import Image from "next/image";
import React from "react";

import logo from "src/assets/logo-cn.png";
import Footer from "src/components/Footer";

function ContactUs() {
  return (
    <div className="relative isolate bg-black pb-[60px]">
      <iframe
        height="450"
        loading="lazy"
        allowFullScreen
        className="w-full"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:EkJOby4gMTA1LCBMYW5lIDEsIFhpZnUgUmQsIFd1cmkgRGlzdHJpY3QsIFRhaWNodW5nIENpdHksIFRhaXdhbiA0MTQiMBIuChQKEgkjcq75kDtpNBEQ9uHvIMs-5hBpKhQKEgmP1xNMkDtpNBHEMrB_X0DFzg&key=AIzaSyCTA5Syhsd6fSNiNjHb07KvtSiXm-7xzqs"></iframe>
      <section className="flex items-center gap-7 bg-chaos-black py-10 pl-16 sm:flex-col sm:items-start sm:gap-3 sm:bg-aswad-black sm:py-7 sm:px-8">
        <Image src={logo} alt="logo" height={76} className="sm:w-44" />
        <div className="self-stretch border-r border-light-red" />
        <div className="text-xl text-white sm:text-base">
          <p className="mb-1">台中市烏日區溪福路一巷110弄105-9號</p>
          <p>04-2335 6118</p>
        </div>
      </section>
      <section className="flex justify-center pt-14 pb-24 sm:flex-col sm:px-8 sm:pt-7 sm:pb-0">
        <form className="grid gap-3 text-lg text-white">
          <LabeledInput label="姓名" />
          <LabeledInput label="電話" />
          <LabeledInput label="信箱" />
          <LabeledInput label="諮詢內容" asTextarea />
          <button className="h mt-2.5 w-[495px] justify-self-end border border-white/[0.35] bg-button py-2 hover:bg-button-hover sm:w-full">
            送出
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

function LabeledInput({ label, asTextarea }: { label: string; asTextarea?: boolean }) {
  const Input = asTextarea ? "textarea" : "input";
  return (
    <label className="flex items-start gap-5 sm:flex-col sm:gap-3">
      <span className="w-20 text-right sm:text-left">{label}</span>
      <Input
        type="text"
        placeholder={`請輸入${label}`}
        className="w-[495px] border border-white/[0.15] bg-matt-black py-2.5 px-4 placeholder:text-white/20 sm:w-full"
        rows={3}
      />
    </label>
  );
}

export default ContactUs;
