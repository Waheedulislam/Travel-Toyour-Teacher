"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { ReactElement, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FormModalProps {
  children: ReactElement;
}

export function FormModal({ children }: FormModalProps) {
  const [isAgreed, setIsAgreed] = useState(false);

  const form = useForm<FieldValues>({
    defaultValues: {
      email: "",
      phone: "",
      name: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form || {};

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[480px] rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-center font-normal text-gray-700">
            Заполните ваши данные и мы вам <br /> перезвоним в ближайшее время
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="flex gap-3">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="E-mail"
                        {...field}
                        value={field.value || ""}
                        className="rounded-full px-4 py-2 border border-gray-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Телефон"
                        {...field}
                        value={field.value || ""}
                        className="rounded-full px-4 py-2 border border-gray-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      {...field}
                      value={field.value || ""}
                      className="rounded-full px-4 py-2 border border-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Agreement Checkbox */}
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
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 underline"
                >
                  Согласие на обработку персональных данных.
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-[#FFC1C1] hover:bg-[#FFC1C1] text-[#3B2A2A] hover:text-white w-full mt-2 py-4 text-md font-semibold rounded-2xl disabled:opacity-50"
              disabled={!isAgreed || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "ОТПРАВИТЬ СООБЩЕНИЕ"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
