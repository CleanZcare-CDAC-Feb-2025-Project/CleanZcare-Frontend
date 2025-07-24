import React from "react";

export type PageHeaderTypes = {
  title: string;
  breadcrumb: { name: string; href?: string }[];
  className?: string;
};

export default function PageHeader({
  title,
  breadcrumb,
  children,
  className,
  subtitle,
}) {
  return (
    <div className={"mb-6 xs:-mt-2 lg:mb-7 sm:px-7"}>
      <div className="flex lg:flex-row lg:items-center justify-between items-center">
        <div>
          <h2 className="mb-2 text-3xl sm:text-4xl sm:font-semibold lg:text-4xl 4xl:text-[26px]">
            {title}
          </h2>
          {subtitle && <p>{subtitle}</p>}

          {/* <breadcrumb
            separator=""
            separatorVariant="circle"
            className="flex-wrap"
          >
            {breadcrumb.map((item) => (
              <Breadcrumb.Item
                key={item.name}
                {...(item?.href && { href: item?.href })}
              >
                {item.name}
              </Breadcrumb.Item>
            ))}
          </breadcrumb> */}
        </div>
        {/* <span className="border "> */}

        {children}
        {/* </span> */}
      </div>
    </div>
  );
}
