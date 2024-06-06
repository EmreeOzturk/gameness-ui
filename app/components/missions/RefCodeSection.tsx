// "use client";
import { Copy } from "lucide-react";
// import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { v4 as uuidv4 } from "uuid";
import { auth } from "@/auth";
import { Session } from "next-auth";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const RefCodeSection = async () => {
  // const [showCaptcha, setShowCaptcha] = useState(false);
  // const [referenceCode, setReferenceCode] = useState("");
  // const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  // const handleCaptchaChange = (token: string | null) => {
  //   setCaptchaToken(token);
  //   setShowCaptcha(false);
  //   setReferenceCode(uuidv4());
  //   navigator.clipboard.writeText(referenceCode);
  // };

  // const handleShowCaptcha = () => {
  //   if (!referenceCode) {
  //     setShowCaptcha(true);
  //   } else {
  //     navigator.clipboard.writeText(referenceCode);
  //   }
  // };

  const session = (await auth()) as Session;

  return (
    <div className="flex flex-col items-center justify-center  mb-6 gap-4 w-full text-center text-zinc-500">
      <p>Invite friends using Referral Code for bonus points.</p>
      {/* {!showCaptcha && (
        <button
          className="bg-sky-500 z-20 hover:scale-105 transition-all  text-zinc-300 text-base font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2"
          onClick={handleShowCaptcha}
        >
          {!!referenceCode ? referenceCode : "DATS Project"}
          <Copy size={24} />
        </button>
      )} */}
      {/* <button className="bg-sky-500 z-20 hover:scale-105 transition-all  text-zinc-300 text-base font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2">
        {session?.user?.refId}
        <Copy size={24} />
      </button> */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            DATS Project
            <Copy size={24} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter referral code</DialogTitle>
            <DialogDescription>
              So i cant give spoilers. Referance is important.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              {/* <Label htmlFor="name" className="text-right">
                Name
              </Label> */}
              <Input
                id="name"
                placeholder="Enter referral code..."
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* {showCaptcha && (
        <>
          <ReCAPTCHA
            style={{ zIndex: 1000 }}
            sitekey="6LflwO4pAAAAAEPf78_cTdEdDcXhrpuh9USiAJ8J"
            onChange={handleCaptchaChange}
          />
        </>
      )} */}
    </div>
  );
};

export default RefCodeSection;
