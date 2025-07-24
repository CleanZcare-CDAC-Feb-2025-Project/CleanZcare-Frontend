import { StarIcon } from "@heroicons/react/20/solid";

export default function MetricCard({
  title,
  metric,
  icon,
  chart,
  info,
  rounded = "DEFAULT",
  className,
  iconClassName,
  contentClassName,
  titleClassName,
  metricClassName,
  chartClassName,
  children,
  price,
  rating,
  reviews,
  currency = "INR",
  heading,
  headingClassName
}) {
  // console.log("className",className);
  
  return (
    
    <div
      className={`bg-gray-0 p-0  lg:p-0 rounded-sm ${className}  overflow-hidden `}
    >
      {/* <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon ? (
            <div
              className={
                'flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 lg:h-12 lg:w-12'
                }
            >
              {icon}
            </div>
          ) : null}

          <div className={icon && 'ps-3'}>
            <p className={'mb-0.5 text-gray-500'}>
              {title}
            </p>
            <p
              className={
                'font-lexend text-lg font-semibold text-gray-900 2xl:xl:text-xl dark:text-gray-700'
                }
            >
              {metric}
            </p>

            {info ? info : null}
          </div>
        </div>

        {chart ? (
          <div className={'h-12 w-20'}>{chart}</div>
        ) : null}
      </div> */}
      {heading && (
        <div>
          <p className={`mb-1 text-md font-medium text-gray-900 pt-3 ${headingClassName}`}>{heading}</p>
        </div>
      )}
      <div className={`group ${titleClassName}`}>{children}</div>
      {title && (
        <div>
          <p className="mb-1 text-md font-medium text-gray-900 pt-3">{title}</p>
        </div>
      )}
      {rating && reviews && (
        <div className="flex gap-1 items-center">
          <StarIcon height={15} className="m-0 p-0" />
          {rating}
          {" (" + `${reviews}` + ")"}
        </div>
      )}
      {price && (
        <div>
          <p>
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: `${currency}`,
            })}
          </p>
        </div>
      )}
    </div>
  );
}
