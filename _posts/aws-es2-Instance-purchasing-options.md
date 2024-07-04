---
title: "AWS - EC2 Instance purchasing options"
excerpt: "Find the most affordable AWS EC2 instance options for your cloud strategy by comparing spot, reserved, on-demand, and dedicated host options."
coverImage: "/assets/blog/aws-es2-Instance-purchasing-options/cover.jpg"
date: "2024-06-23"
tag: "Cloud"
author:
  name: Vinoth
  picture: "/assets/blog/authors/vinoth.jpg"
ogImage:
  url: "/assets/blog/aws-es2-Instance-purchasing-options/cover.jpg"
---

Amazon EC2 provides purchasing options to enable you to optimize your costs based on your needs.

![EC2 purchasing options](/assets/blog/aws-es2-Instance-purchasing-options/ec2-launch-types.jpg)

## On-Demand Instances

- Pay, by the second, for the instances that you launch.
- No longer-term commitments or upfront payments are needed.
- You have full control over its lifecycle, you decide when to launch, start, stop, reboot, or terminate it.
- You pay only when your On-Demand Instances are in the running state.
- Can increase or decrease your compute capacity.

## Reserved Instances

- Up to 75% savings compared to On-Demand Instance pricing.
- You can purchase a Reserved Instance for a one-year or three-year commitment, with the three-year commitment offering a bigger discount.
- Commitment includes instance type and Region.
- Reserved Instances do not renew automatically; when they expire, you can continue using the EC2 instance without interruption, but you are charged On-Demand rates.
- After you purchase a Reserved Instance, you cannot cancel your purchase. However, you may be able to modify, exchange, or sell your Reserved Instance if your needs change.

## Scheduled Reserved Instances

- Purchase instances that are always available on the specified recurring schedule.
- Recur on a daily, weekly, or monthly basis, with a specified start time and duration.
- You pay for the time that the instances are scheduled, even if you do not use them.
- After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.
- You must purchase a Scheduled Reserved Instance minimum for one year.
- The minimum required utilization is 1,200 hours per year.

## Spot Instances

- The most cost-efficient instance in AWS. Up to 90% savings compared to On-Demand Instance pricing.
- Request unused EC2 instances, which can reduce your Amazon EC2 costs significantly.
- Instances that can "lose" at any point of time if your max price is less than the current spot price.
- Well-suited for batch jobs, background processing, and optional tasks. Not good for critical jobs.

## Dedicated Hosts

- Pay for a physical host.
- Physical server with EC2 instance capacity fully dedicated to your use.
- Full control of the Instance placement.
- Visibility into the underlying socket, the core of the hardware.
- You must purchase a Dedicated Hosts Instance minimum for one year.

## Dedicated Instances

- Pay, by the hour, for instances that run on hardware that's dedicated to a single customer.
- May share hardware with other instances from the same AWS account.

## Great combo

Reserved Instance for baseline + On-Demand and Spot Instances for scaling.

---

### Resource

[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html)

[https://aws.amazon.com/ec2/pricing](https://aws.amazon.com/ec2/pricing)