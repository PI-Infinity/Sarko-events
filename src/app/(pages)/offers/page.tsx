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
      className="w-full h-[95vh]
    desktop:pr-[8%] pt-[100px] desktop:pt-[140px] text-white
    flex-col items-center
    overflow-y-auto pb-4"
    >
      <div className="w-[100%] p-4 px-8 desktop:w-[70%] pb-32 desktop:px-24 slide-in-top flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold mb-2 desktop:mb-4 whitespace-nowrap w-full">
          What I Can Create
        </h2>
        <div className="list-disc list-inside w-full">
          <div className="mb-4 flex flex-col gap-2">
            <strong>E-commerce Platforms</strong>
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
            <strong>Social Media Platforms</strong>
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
            <strong>Minimum Viable Products (MVPs)</strong>
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
            <strong>Customer Relationship Management (CRM) Systems</strong>
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
            <strong>Content Management Systems (CMS)</strong>
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
            <strong>Web Portals</strong>
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
          <div className="mb-4 flex flex-col gap-2">
            <strong>SaaS Applications</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Software-as-a-Service platforms for delivering software over the
                internet.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Subscription-based models with multi-tenant architecture.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Enterprise Applications</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Internal tools for managing business operations, such as HR,
                finance, and project management.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Integration with existing enterprise systems and databases.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Real-Time Applications</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Applications with real-time updates, such as live chat,
                collaborative editing, and data visualization.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Use of WebSockets and other technologies for real-time
                communication.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Educational Platforms</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Online learning management systems (LMS) for courses, quizzes,
                and assignments.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Virtual classrooms and video conferencing tools.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Mobile Applications</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Cross-platform mobile apps using frameworks like React Native.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Integration with native device features and third-party APIs.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>API Development</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                RESTfdiv and GraphQL APIs for backend services.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Microservices architecture for scalable and modular
                applications.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Single Page Applications (SPAs)</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Responsive web applications with dynamic user interfaces.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Use of modern JavaScript framework React/NextJs.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Progressive Web Apps (PWAs)</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Web applications with offline capabilities and native app-like
                experiences.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Use of service workers and manifest files for enhanced
                performance.
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <strong>Data-Driven Applications</strong>
            <div className="font-custom ml-4 desktop:ml-8 list-circle list-inside">
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Dashboards and analytics platforms for visualizing and analyzing
                data.
              </div>
              <div className="flex gap-2">
                <div>
                  <MdDone color={theme.active} size={24} />
                </div>
                Integration with big data technologies and databases.
              </div>
            </div>
          </div>
          <Link
            href="/projects"
            className="h-12 w-[100%] desktop:hidden mt-8 flex items-center gap-4 shadow-md rounded-full"
          >
            <Button
              title="Projects"
              color={theme.secondaryText}
              background={theme.btn}
              icon={<IoMdArrowDropright size={24} />}
              onClick={() => undefined}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offers;
