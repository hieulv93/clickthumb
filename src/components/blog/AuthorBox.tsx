import Link from "next/link";

export default function AuthorBox() {
  return (
    <div className="flex gap-4 items-start border-t border-border pt-8 mt-10">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-base select-none">
        AK
      </div>
      <div>
        <p className="text-sm font-semibold text-text-main">
          Written by{" "}
          <Link href="/about/" className="text-primary hover:underline">
            Alex Kim
          </Link>
        </p>
        <p className="text-sm text-text-muted leading-relaxed mt-1">
          Alex Kim is an indie developer and content creator who built
          ClickThumb after years of fighting clunky design tools to make
          thumbnails every week. He writes about thumbnail design, YouTube CTR,
          and the exact image sizes every platform expects — based on what
          actually moves the needle for creators, not design theory.{" "}
          <Link href="/about/" className="text-primary hover:underline">
            More about Alex →
          </Link>
        </p>
      </div>
    </div>
  );
}
