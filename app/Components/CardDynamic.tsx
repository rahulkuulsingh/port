"use client";
import Image from "next/image";
import Link from "next/link";
import CaseStudyButton from "./CaseStudyButton";
import React from 'react';

interface CardDynamicProps {
  title?: string;
  cardLink: string;
  containerClassName?: string;
  cardClassName?: string;
  cardImage?: string;
  button?: boolean;
  customContent?: React.ReactNode;
}

export default function CardDynamic({
  title,
  cardLink,
  containerClassName,
  cardClassName,
  cardImage,
  customContent,
  button,
}: CardDynamicProps) {
  return (
    <Link href={cardLink} passHref className={`${containerClassName}`}>
      <div className={`${cardClassName} rounded-lg bg-white shadow-xl overflow-clip dark:bg-zinc-900`}>
        {cardImage && (
          <div className="overflow-hidden">
            <Image
              className="overflow-hidden card-image"
              src={cardImage}
              width={360}
              height={640}
              alt="Project featured Image describing the project"
            />
          </div>
        )}
        {title &&
        <div className="flex flex-col w-full px-4 py-8 pb-4">
           <h2 className="mt-4 text-2xl font-light tracking-tight">{title}</h2>
          {customContent}
          {button && <CaseStudyButton />}
        </div>}
      </div>
    </Link>
  );
}
