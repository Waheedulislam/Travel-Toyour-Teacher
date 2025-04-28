import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"; // ✅ use shadcn/ui checkbox
import { ReactElement, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FormModalProps {
  children: ReactElement;
}

export function FormModal({ children }: FormModalProps) {
  const [isAgreed, setIsAgreed] = useState(false); // manage agreement checkbox

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[480px] rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-center  font-normal text-gray-700">
            Заполните ваши данные и мы вам <br /> перезвоним в ближайшее время
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4 mt-4">
          <div className="flex gap-3">
            <Input
              placeholder="E-mail"
              className="rounded-full px-4 py-2 border border-gray-300"
            />
            <Input
              placeholder="Телефон"
              className="rounded-full px-4 py-2 border border-gray-300"
            />
          </div>

          <Input
            placeholder="Ваше имя"
            className="rounded-full px-4 py-2 border border-gray-300"
          />

          {/* First Checkbox: must agree */}
          <div className="flex items-start justify-center gap-2 text-sm text-gray-500">
            <Checkbox
              id="terms"
              checked={isAgreed}
              onCheckedChange={(checked) => setIsAgreed(!!checked)}
              className={cn(
                "border-gray-300 mt-2 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              )}
            />
            <label htmlFor="terms" className="leading-snug">
              Нажимая на кнопку, вы даете свое{" "}
              <Link href="/privacy-policy" className="text-blue-600 underline">
                Согласие на обработку персональных данных.
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            className="bg-[#FFC1C1] hover:bg-[#FFC1C1] text-[#3B2A2A] hover:text-white w-full mt-2 py-4 text-md font-semibold rounded-2xl disabled:opacity-50"
            disabled={!isAgreed} // button disable when checkbox not checked
          >
            ОТПРАВИТЬ СООБЩЕНИЕ
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
