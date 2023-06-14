import { Blockquote } from "@mantine/core"

interface ReviewProps {
  review: string
  author: string
  imgPath: string
}

export function Review({ review, author, imgPath }: ReviewProps) {
  return (
    <Blockquote
      classNames={{
        cite: "!text-accent-dark",
        icon: "!my-auto !text-secondary-light",
        body: "!text-secondary-dark pb-10 xl:!px-5",
        root: "!p-0 xl:w-1/3",
      }}
      cite={author}
      icon={null}
    >
      <img
        loading="lazy"
        alt=""
        src={imgPath}
        height={60}
        width={60}
        className="mx-auto pb-2 !block !w-16 !h-auto rounded-full"
      />
      {review}
    </Blockquote>
  )
}
