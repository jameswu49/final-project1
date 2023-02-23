set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";
CREATE TABLE "public"."member" (
  "name" TEXT NOT NULL,
  "memberId" serial NOT NULL,
  "email" TEXT NOT NULL,
  CONSTRAINT "member_pk" PRIMARY KEY ("memberId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."offering" (
  "memberId" int NOT NULL,
  "paymentId" serial NOT NULL,
  "offeringId" serial NOT NULL,
  CONSTRAINT "offering_pk" PRIMARY KEY ("offeringId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."newcomer" (
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "newcomerId" serial NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."billingInfo" (
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "billing_address" varchar(255) NOT NULL,
  "city" TEXT NOT NULL,
  "state" TEXT NOT NULL,
  "zip_code" int NOT NULL,
  "country" TEXT NOT NULL,
  "card_num" bigint NOT NULL,
  "exp_date" int NOT NULL,
  "security_code" int NOT NULL,
  "amount" int NOT NULL,
  "paymentId" serial NOT NULL,
  CONSTRAINT "billingInfo_pk" PRIMARY KEY ("paymentId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "offering" ADD CONSTRAINT "offering_fk0" FOREIGN KEY ("memberId") REFERENCES "member"("memberId");
ALTER TABLE "offering" ADD CONSTRAINT "offering_fk1" FOREIGN KEY ("paymentId") REFERENCES "billingInfo"("paymentId");
