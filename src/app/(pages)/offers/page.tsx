"use client";
import Button from "@/components/button";
import { useAppContext } from "@/context/app";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdDone } from "react-icons/md";

const Offers = () => {
  const { theme, loading } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ display: loading ? "none" : "flex", color: theme.text }}
      className="pt-[100px] desktop:pt-[120px] pb-[200px] desktop:pb-[220px]"
    >
      <div className="w-[100%] p-4 px-[5%] pb-32 desktop:px-24 slide-in-top flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold mb-2 desktop:mb-4 whitespace-nowrap w-full">
          What We Create
        </h2>
        <div className="list-disc list-inside w-full">
          <div className="mb-4 flex flex-col gap-2">
            <strong>Weddings</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Online stores for selling products and services.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Marketplaces connecting multiple sellers with buyers.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Custom shopping carts and payment gateways.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Corporate event</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Social networking sites with user profiles, friend connections,
                and news feeds.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Messaging and chat applications with real-time communication.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Content sharing platforms for images, videos, and blogs.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Company/product presentation</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Prototype versions of products to validate ideas and gather user
                feedback.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Basic functional versions of complex applications to attract
                initial users and investors.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Conference</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Tools for managing customer interactions, sales processes, and
                support tickets.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Integration with marketing automation and analytics tools.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Teambuilding</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Platforms for managing and publishing digital content.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Customizable templates and plugins for various content types.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Festival organization</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Centralized access points for information and services.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                User dashboards with personalized content and tools.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
