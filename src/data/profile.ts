import type { ProfileData } from '../types/portfolio';

/**
 * =========================================================================
 * NGUỒN DỮ LIỆU DUY NHẤT (SINGLE SOURCE OF TRUTH)
 * =========================================================================
 * Chỉnh sửa file này để cập nhật toàn bộ nội dung song ngữ VI / EN:
 * - Tên hiển thị, địa điểm, ảnh đại diện (tùy chọn)
 * - 4 lĩnh vực (Lập trình & AI, Buôn bán, Quảng cáo & Tiếp thị, Logistics Việt Đức)
 * - Danh sách dự án thực tế, hành trình & kênh liên hệ
 */
export const PROFILE: ProfileData = {
  brand: {
    name: 'Hiệp Nguyễn',
    monogram: 'HN',
    location: {
      vi: 'Hà Nội, Việt Nam',
      en: 'Hanoi, Vietnam',
    },
    availability: {
      vi: 'Nhận kết nối hợp tác',
      en: 'Open to collaborations',
    },
    // Điền link ảnh chân dung nếu muốn thay monogram
    avatarUrl: '',
  },

  hero: {
    eyebrow: {
      vi: 'Lập trình & AI · Kinh doanh · Tiếp thị · Logistics Việt Đức',
      en: 'Software & AI · Commerce · Marketing · Viet Duc Logistics',
    },
    headline: {
      vi: 'Xây hệ thống phần mềm & AI thực dụng, đi cùng kinh doanh và vận hành thực chiến',
      en: 'Building practical software & AI systems alongside commerce and hospital logistics',
    },
    subheadline: {
      vi: 'Tôi phát triển ứng dụng Fullstack, Computer Vision / AR và hệ thống tự động hóa — đồng thời trực tiếp buôn bán, chạy quảng cáo tiếp thị sản phẩm và điều phối logistics tại Bệnh viện Hữu nghị Việt Đức.',
      en: 'I build fullstack platforms, Computer Vision / AR applications, and automation pipelines — while directly running commerce, product marketing, and healthcare logistics at Viet Duc University Hospital.',
    },
    primaryCta: {
      vi: 'Xem 4 lĩnh vực',
      en: 'View capabilities',
    },
    secondaryCta: {
      vi: 'Trao đổi hợp tác',
      en: 'Start a conversation',
    },
    stats: [
      {
        value: '4',
        label: {
          vi: 'Mảng công việc vận hành song song',
          en: 'Active disciplines run in parallel',
        },
      },
      {
        value: 'Fullstack · AI',
        label: {
          vi: 'Web/Mobile, Computer Vision, AR & Bot',
          en: 'Web/Mobile, Computer Vision, AR & Automation',
        },
      },
      {
        value: 'Việt Đức',
        label: {
          vi: 'Môi trường điều phối logistics y tế',
          en: 'Healthcare logistics environment',
        },
      },
    ],
  },

  pillars: [
    {
      id: 'programming',
      accent: 'sky',
      title: {
        vi: 'Lập trình, AI & Tự động hóa',
        en: 'Software, AI & Automation',
      },
      shortTitle: {
        vi: 'Lập trình & AI',
        en: 'Engineering & AI',
      },
      subtitle: {
        vi: 'Fullstack Web/Mobile, Computer Vision / AR & hệ thống tự động hóa',
        en: 'Fullstack Web/Mobile, Computer Vision / AR & automation pipelines',
      },
      description: {
        vi: 'Xây dựng trọn gói từ ứng dụng Web/PWA realtime, Mobile đa nền tảng đến các bài toán thị giác máy tính (AI Camera, nhận diện cử chỉ 3D/AR với PyTorch & Unity) và bot tự động hóa nội dung chạy trên Linux/Docker.',
        en: 'End-to-end engineering spanning realtime Web/PWA & Mobile platforms, Computer Vision / AR systems (AI Camera, 3D gesture recognition in PyTorch & Unity), and Linux/Docker automation pipelines.',
      },
      highlights: [
        {
          vi: 'Fullstack & Realtime: Next.js, React, Node.js, GraphQL, Socket.IO, MongoDB/Redis, React Native (Expo)',
          en: 'Fullstack & Realtime: Next.js, React, Node.js, GraphQL, Socket.IO, MongoDB/Redis, React Native (Expo)',
        },
        {
          vi: 'AI, Computer Vision & 3D/AR: Python, PyTorch, MediaPipe, Unity C#, AI Camera phân tích hành vi',
          en: 'AI, Computer Vision & 3D/AR: Python, PyTorch, MediaPipe, Unity C#, multi-task AI Camera analytics',
        },
        {
          vi: 'Automation & Hạ tầng: Playwright, tự động tạo/đăng video đa kênh, triển khai Ubuntu Server & Docker',
          en: 'Automation & Infra: Playwright bots, automated video pipelines, Ubuntu Server & Docker deployments',
        },
      ],
      tags: ['Python', 'PyTorch', 'TypeScript', 'Next.js', 'React Native', 'Unity C#', 'Docker'],
    },
    {
      id: 'commerce',
      accent: 'amber',
      title: {
        vi: 'Buôn bán & Kinh doanh',
        en: 'Commerce & Trading',
      },
      shortTitle: {
        vi: 'Buôn bán',
        en: 'Commerce',
      },
      subtitle: {
        vi: 'Chọn nguồn hàng, định giá & vận hành bán lẻ, bán sỉ',
        en: 'Supplier sourcing, pricing & multi-channel retail',
      },
      description: {
        vi: 'Trực tiếp làm từ khâu kiểm tra nguồn hàng, tính toán biên lợi nhuận, xoay vòng tồn kho đến tư vấn khách mua để giữ doanh thu ổn định.',
        en: 'Hands-on execution from supplier verification and margin control to inventory turnover and repeat customer care.',
      },
      highlights: [
        {
          vi: 'Đánh giá thị trường, chọn ngách & kiểm soát chi phí đầu vào',
          en: 'Market validation, SKU selection & unit cost control',
        },
        {
          vi: 'Vận hành bán hàng đa kênh linh hoạt, giữ tệp khách quen',
          en: 'Lean multi-channel sales focused on repeat buyers',
        },
      ],
      tags: ['Sourcing', 'E-commerce', 'Sales Ops', 'Pricing', 'CRM'],
    },
    {
      id: 'marketing',
      accent: 'rose',
      title: {
        vi: 'Quảng cáo & Tiếp thị',
        en: 'Ads & Product Marketing',
      },
      shortTitle: {
        vi: 'Quảng cáo & Tiếp thị',
        en: 'Marketing',
      },
      subtitle: {
        vi: 'Quảng cáo sản phẩm, tiếp thị viên & tự động hóa nội dung',
        en: 'Product advertising, affiliate & content automation',
      },
      description: {
        vi: 'Triển khai nội dung giới thiệu sản phẩm và quảng cáo bám sát chi phí ra đơn thực tế, kết hợp công cụ tự động sản xuất video để mở rộng độ phủ tiếp thị.',
        en: 'Running product campaigns and affiliate promotions grounded in real cost-per-order metrics, amplified by custom video automation tooling.',
      },
      highlights: [
        {
          vi: 'Thử nghiệm nội dung, chạy quảng cáo & theo sát chi phí đơn',
          en: 'Creative testing, media buying & CPA discipline',
        },
        {
          vi: 'Tiếp thị liên kết & xây hệ thống sản xuất nội dung ngắn tự động',
          en: 'Affiliate promotion backed by automated short-form video pipelines',
        },
      ],
      tags: ['Facebook Ads', 'TikTok Ads', 'Affiliate', 'Video Automation', 'CRO'],
    },
    {
      id: 'logistics',
      accent: 'emerald',
      title: {
        vi: 'Logistics — Bệnh viện Việt Đức',
        en: 'Logistics — Viet Duc Hospital',
      },
      shortTitle: {
        vi: 'Logistics Việt Đức',
        en: 'Viet Duc Logistics',
      },
      subtitle: {
        vi: 'Điều phối hậu cần trong môi trường bệnh viện ngoại khoa tuyến đầu',
        en: 'High-precision logistics in a top-tier surgical hospital',
      },
      description: {
        vi: 'Phụ trách điều phối giao nhận và luồng hậu cần phục vụ hoạt động tại Bệnh viện Hữu nghị Việt Đức — nơi sai sót nhỏ cũng ảnh hưởng trực tiếp tới tiến độ.',
        en: 'Coordinating dispatch and supply flow supporting Viet Duc University Hospital — where timeliness and accuracy are non-negotiable.',
      },
      highlights: [
        {
          vi: 'Điều phối luồng vật tư, chứng từ & bàn giao đúng khung giờ',
          en: 'On-time coordination of supplies, records & handovers',
        },
        {
          vi: 'Kiểm chéo chặt chẽ và xử lý nhanh tình huống phát sinh',
          en: 'Double-check verification and calm incident handling',
        },
      ],
      tags: ['Bệnh viện Việt Đức', 'Supply Chain', 'Dispatch', 'SLA', 'Coordination'],
    },
  ],

  projects: [
    {
      id: 'proj-monitor-ar',
      domain: 'programming',
      title: {
        vi: 'Monitor AR — Giả lập đào tạo kỹ thuật 3D bằng cử chỉ tay',
        en: 'Monitor AR — 3D Gesture-Controlled Technical Training Simulator',
      },
      summary: {
        vi: 'Hệ thống mô phỏng thao tác kỹ thuật 3D tương tác trực tiếp qua Webcam không cần kính VR, kết hợp Deep Learning nhận diện chuỗi cử chỉ tay động và trợ lý AI.',
        en: 'Webcam-based 3D technical training simulator combining dynamic hand-gesture deep learning, Unity 3D interaction, and Gemini AI guidance.',
      },
      metric: {
        vi: 'Tương tác 3D thời gian thực qua Webcam (PyTorch + Unity)',
        en: 'Real-time 3D gesture control via standard webcam',
      },
      role: {
        vi: 'AI & Unity Developer',
        en: 'AI & Unity Developer',
      },
      period: '2026',
      tags: ['Unity C#', 'Python', 'PyTorch', 'MediaPipe', 'Gemini API'],
      details: {
        context: {
          vi: 'Đào tạo thao tác lắp ráp/kỹ thuật thực tế thường tốn kém thiết bị mẫu hoặc kính AR/VR chuyên dụng.',
          en: 'Hands-on technical training typically requires costly physical hardware or dedicated AR/VR headsets.',
        },
        solution: {
          vi: 'Huấn luyện mô hình phân loại chuỗi thời gian cử chỉ tay động trong không gian 3D bằng PyTorch + MediaPipe Hands, truyền tín hiệu thời gian thực sang môi trường Unity 2022.3 LTS và tích hợp Gemini 2.0 Flash hướng dẫn quy trình.',
          en: 'Trained a time-series 3D hand gesture classifier using PyTorch and MediaPipe Hands, streamed real-time controls into Unity 2022.3 LTS, and integrated Gemini 2.0 Flash for interactive guidance.',
        },
        impact: {
          vi: 'Cho phép người học thao tác mô hình 3D trực quan chỉ với webcam thông thường, rút ngắn rào cản phần cứng khi đào tạo kỹ thuật.',
          en: 'Enabled natural 3D manipulation using a standard webcam, removing specialized headset barriers for interactive training.',
        },
      },
    },
    {
      id: 'proj-camera-ai',
      domain: 'programming',
      title: {
        vi: 'Camera AI Trường học — Giám sát & phân tích 7 nghiệp vụ thị giác',
        en: 'School AI Camera — 7-Function Computer Vision Platform',
      },
      summary: {
        vi: 'Hệ thống phần mềm phân tích video AI cho môi trường trường học: điểm danh học sinh, chấm công giáo viên, phát hiện xả rác, hút thuốc, đồng phục, PPE bếp và chỉ số biểu cảm.',
        en: 'Multi-task school video analytics covering student attendance, staff timekeeping, littering, smoking detection, uniforms, kitchen PPE, and classroom engagement indicators.',
      },
      metric: {
        vi: '7 nghiệp vụ Computer Vision chuẩn hóa trong một kiến trúc',
        en: '7 standardized CV workflows in one modular architecture',
      },
      role: {
        vi: 'System Architect & Python Developer',
        en: 'System Architect & Python Developer',
      },
      period: '2026',
      tags: ['Python', 'Computer Vision', 'ANSVIS', 'Architecture', 'QA'],
      details: {
        context: {
          vi: 'Trường học cần giám sát an toàn và tự động hóa điểm danh trên nhiều luồng camera nhưng phải kiểm soát chặt ranh giới quyền riêng tư và độ tin cậy cảnh báo.',
          en: 'Schools needed automated attendance and safety monitoring across camera feeds with clear privacy boundaries and dependable alert quality.',
        },
        solution: {
          vi: 'Thiết kế kiến trúc đa luồng nghiệp vụ rõ ràng (điểm danh, chấm công, an toàn bếp PPE, đồng phục, hành vi vi phạm), chuẩn hóa bộ kiểm thử tự động và quy trình đánh giá readiness trước triển khai.',
          en: 'Structured 7 distinct CV workstreams (attendance, kitchen PPE, uniforms, safety alerts) with automated status verification and strict deployment readiness checks.',
        },
        impact: {
          vi: 'Đưa bài toán camera AI từ ý tưởng rời rạc thành hệ thống có đặc tả rõ ràng, dễ kiểm soát chất lượng và sẵn sàng bàn giao.',
          en: 'Turned fragmented video analytics requirements into a well-specified, verifiable, handoff-ready system.',
        },
      },
    },
    {
      id: 'proj-vistay-36chan',
      domain: 'programming',
      title: {
        vi: 'Vistay & 36chan — Hệ thống Fullstack Web, PWA & Mobile đa nền tảng',
        en: 'Vistay & 36chan — Multi-Platform Fullstack Web, PWA & Mobile',
      },
      summary: {
        vi: 'Xây dựng các nền tảng ứng dụng hoàn chỉnh nhiều phân hệ (Customer, Host, Admin, Gateway API, Mobile App) và PWA realtime hỗ trợ đồng thời Web, iOS, Android, Desktop.',
        en: 'Engineered multi-app ecosystems (Customer, Host, Admin, API Gateway, Expo Mobile) and realtime PWA architectures serving Web, Mobile, and Desktop.',
      },
      metric: {
        vi: 'Kiến trúc đa phân hệ: Web · Mobile · Realtime API',
        en: 'Multi-app architecture: Web, Mobile & Realtime API',
      },
      role: {
        vi: 'Fullstack & Mobile Developer',
        en: 'Fullstack & Mobile Developer',
      },
      period: '2025 – 2026',
      tags: ['Next.js 16', 'React Native', 'GraphQL', 'Node.js', 'Socket.IO', 'MongoDB'],
      details: {
        context: {
          vi: 'Các sản phẩm dịch vụ và cộng đồng hiện đại đòi hỏi đồng bộ dữ liệu mượt mà giữa nhiều nhóm người dùng (khách hàng, đối tác, quản trị) trên cả trình duyệt lẫn điện thoại.',
          en: 'Modern service and community platforms require synchronized workflows across customers, hosts, and admins on both web and mobile.',
        },
        solution: {
          vi: 'Triển khai Vistay với kiến trúc tách biệt frontend_customer, frontend_host, frontend_admin, gateway_api và app Expo React Native (GraphQL/Apollo, OIDC); xây dựng 36chan bằng Next.js 16 PWA, Express 5, MongoDB Atlas, Redis và Socket.IO.',
          en: 'Built Vistay across modular web portals, GraphQL/OIDC gateway, and Expo React Native mobile app; developed 36chan as a standalone PWA powered by Next.js 16, Express 5, MongoDB Atlas, Redis, and Socket.IO.',
        },
        impact: {
          vi: 'Chứng minh khả năng tự thiết kế và triển khai trọn vẹn hệ thống phần mềm nhiều tầng từ giao diện người dùng đến máy chủ realtime.',
          en: 'Demonstrated full-lifecycle ownership from responsive UI and mobile apps to scalable realtime backend services.',
        },
      },
    },
    {
      id: 'proj-autovideobot-adn',
      domain: 'programming',
      title: {
        vi: 'AutoVideoBot & ADN — Hệ thống Automation Server & Mô phỏng Khoa học',
        en: 'AutoVideoBot & ADN — Server Automation & Computational Modeling',
      },
      summary: {
        vi: 'Triển khai pipeline tự động sản xuất video đa kênh trên Ubuntu Server/Docker (phục vụ trực tiếp mảng tiếp thị) và pipeline Python mô phỏng mạng điều hòa gen lão hóa tế bào (scRNA-seq).',
        en: 'Built an Ubuntu/Docker automated multi-channel video pipeline for content marketing alongside a Python Boolean gene-network simulator validated on scRNA-seq data.',
      },
      metric: {
        vi: 'Vận hành tự động trên Ubuntu/Docker + CI/CD chuẩn hóa',
        en: 'Automated Ubuntu/Docker pipelines & CI-verified Python',
      },
      role: {
        vi: 'Python & Automation Engineer',
        en: 'Python & Automation Engineer',
      },
      period: '2025 – 2026',
      tags: ['Python', 'Docker', 'Ubuntu SSH', 'Playwright', 'scRNA-seq', 'CI/CD'],
      details: {
        context: {
          vi: 'Vừa cần tự động hóa khâu sản xuất video ngắn cho hoạt động quảng cáo/tiếp thị trên máy chủ chạy độc lập, vừa giải quyết bài toán mô phỏng dữ liệu sinh học tính toán có kiểm chứng tự động.',
          en: 'Needed unattended server-side video generation for marketing channels alongside a reproducible computational biology pipeline for cellular senescence modeling.',
        },
        solution: {
          vi: 'Đóng gói AutoVideoBot + MoneyPrinterTurbo chạy cô lập bằng Docker & Python venv trên Ubuntu Server 24 qua SSH; xây dựng pipeline ADN mô phỏng mạng gen Boolean kiểm chứng dữ liệu GSE130973 kèm pytest & GitHub Actions CI.',
          en: 'Deployed AutoVideoBot and MoneyPrinterTurbo in isolated Docker/venv environments on Ubuntu 24 via SSH; engineered the ADN Boolean network workbench validated against GSE130973 with pytest and GitHub Actions CI.',
        },
        impact: {
          vi: 'Kết nối trực tiếp kỹ năng kỹ thuật sang tạo đòn bẩy cho mảng tiếp thị nội dung, đồng thời giữ chuẩn mực kiểm thử và cô lập môi trường nghiêm ngặt.',
          en: 'Turned engineering automation directly into marketing leverage while upholding strict environment isolation and automated testing.',
        },
      },
      link: 'https://github.com/HIepNgoc2006/ADN',
    },
    {
      id: 'proj-commerce-channel',
      domain: 'commerce',
      title: {
        vi: 'Vận hành nguồn hàng & bán lẻ sản phẩm tiêu dùng',
        en: 'Consumer Product Sourcing & Direct Retail',
      },
      summary: {
        vi: 'Trực tiếp tuyển chọn nguồn hàng, kiểm soát tồn kho và duy trì kênh bán có tỷ lệ khách quay lại ổn định.',
        en: 'Direct supplier vetting, lean stock control, and repeat-driven retail operations.',
      },
      metric: {
        vi: 'Duy trì vòng quay hàng gọn & biên lợi nhuận ổn định',
        en: 'Lean stock turnover & healthy unit margins',
      },
      role: {
        vi: 'Vận hành kinh doanh',
        en: 'Commerce Operator',
      },
      period: '2024 – 2026',
      tags: ['Sourcing', 'Inventory', 'Multi-channel', 'Customer Care'],
      details: {
        context: {
          vi: 'Bán lẻ cạnh tranh mạnh về giá khiến nhiều shop ôm tồn kho hoặc bị ăn mòn biên lợi nhuận bởi chi phí vận chuyển và hoàn hàng.',
          en: 'Price-sensitive retail markets quickly erode margins when inventory sits idle or return rates climb.',
        },
        solution: {
          vi: 'Chuẩn hóa quy trình kiểm tra mẫu đầu vào, chia rõ sản phẩm phễu và sản phẩm chủ lực, đồng thời giữ lịch chăm sóc khách sau khi nhận hàng.',
          en: 'Standardized sample checks before restocking, separated entry SKUs from core margin items, and kept structured post-delivery follow-ups.',
        },
        impact: {
          vi: 'Giữ tồn kho ở mức an toàn, kiểm soát tốt tỷ lệ hoàn đơn và xây dựng được tệp khách quen đặt mua định kỳ.',
          en: 'Kept inventory lean, lowered return friction, and built a dependable base of recurring customers.',
        },
      },
    },
    {
      id: 'proj-ads-affiliate',
      domain: 'marketing',
      title: {
        vi: 'Chiến dịch quảng cáo sản phẩm & tiếp thị viên',
        en: 'Product Advertising & Affiliate Distribution',
      },
      summary: {
        vi: 'Triển khai nội dung đánh giá thực tế kết hợp quảng cáo chuyển đổi và hệ thống tự động sản xuất video ngắn cho nhiều mặt hàng.',
        en: 'Hands-on product angles paired with performance ads, affiliate distribution, and automated short-form video tooling.',
      },
      metric: {
        vi: 'Giữ chi phí quảng cáo trong ngưỡng sinh lời thực',
        en: 'Acquisition spend kept inside profitable thresholds',
      },
      role: {
        vi: 'Quảng cáo & Tiếp thị viên',
        en: 'Marketer & Affiliate Partner',
      },
      period: '2024 – 2026',
      tags: ['Performance Ads', 'Affiliate', 'Short-form Video', 'Analytics'],
      details: {
        context: {
          vi: 'Nhiều sản phẩm hữu ích nhưng bài bán hàng viết quá chung chung, đốt ngân sách quảng cáo mà tỷ lệ hỏi mua thấp.',
          en: 'Useful products often stalled because generic ad copy burned spend without giving buyers a concrete reason to act.',
        },
        solution: {
          vi: 'Chia nhỏ nhiều góc nội dung thực tế (trải nghiệm dùng thật, so sánh trực diện, giải đáp thắc mắc) để thử nghiệm ngân sách nhỏ trước khi nhân rộng qua kênh tiếp thị và video tự động.',
          en: 'Tested focused creative angles — real usage demos, direct comparisons, objection answers — on small budgets before scaling across affiliate channels.',
        },
        impact: {
          vi: 'Tăng tỷ lệ nhấp và tỷ lệ chốt đơn thực tế, giúp đối tác mở rộng độ phủ sản phẩm mà không bị đội chi phí.',
          en: 'Lifted click-through and checkout conversion while protecting partner unit economics.',
        },
      },
    },
    {
      id: 'proj-vietduc-logistics',
      domain: 'logistics',
      title: {
        vi: 'Điều phối Logistics tại Bệnh viện Hữu nghị Việt Đức',
        en: 'Healthcare Logistics at Viet Duc University Hospital',
      },
      summary: {
        vi: 'Quản lý luồng điều phối, giao nhận và hỗ trợ hậu cần trong môi trường bệnh viện ngoại khoa đầu ngành tại Hà Nội.',
        en: 'Managing high-stakes dispatch and supply coordination inside Vietnam’s leading surgical hospital in Hanoi.',
      },
      metric: {
        vi: 'Bàn giao đúng tiến độ trong môi trường cường độ cao',
        en: 'Reliable on-time handovers under clinical pressure',
      },
      role: {
        vi: 'Điều phối Logistics',
        en: 'Logistics Coordinator',
      },
      period: 'Hiện tại',
      tags: ['Bệnh viện Việt Đức', 'Điều phối', 'Hậu cần Y tế', 'SLA'],
      details: {
        context: {
          vi: 'Bệnh viện Hữu nghị Việt Đức tiếp nhận lưu lượng công việc rất lớn mỗi ngày, đòi hỏi khâu hậu cần và giao nhận phải khớp chính xác theo lịch chuyên môn.',
          en: 'Viet Duc University Hospital operates at high daily clinical volume where logistics schedules must align tightly with medical workflows.',
        },
        solution: {
          vi: 'Thực hiện kiểm chéo đầu mục trước khi xuất/nhận, phân thứ tự ưu tiên theo mức độ gấp và duy trì liên lạc rõ ràng giữa các đầu mối.',
          en: 'Maintained strict pre-dispatch checklists, urgency-based routing priorities, and clear handoff communication across teams.',
        },
        impact: {
          vi: 'Đảm bảo tiến độ bàn giao an toàn, chuẩn xác và rèn luyện tác phong làm việc kỷ luật áp dụng ngược lại cho các dự án công nghệ và kinh doanh.',
          en: 'Delivered consistent, accurate handovers while forging operational reliability carried into every commercial and engineering project.',
        },
      },
    },
  ],

  experiences: [
    {
      id: 'exp-vietduc',
      period: {
        vi: 'Hiện tại',
        en: 'Present',
      },
      role: {
        vi: 'Điều phối Logistics & Hậu cần',
        en: 'Healthcare Logistics Coordinator',
      },
      organization: {
        vi: 'Bệnh viện Hữu nghị Việt Đức',
        en: 'Viet Duc University Hospital',
      },
      domain: 'logistics',
      description: {
        vi: 'Điều phối vận hành logistics trong môi trường y tế cường độ cao, đề cao tính chính xác, bảo mật và đúng giờ.',
        en: 'Coordinating daily logistics operations in a high-intensity clinical setting with strict accuracy and punctuality.',
      },
      achievements: [
        {
          vi: 'Phối hợp nhiều đầu mối, xử lý gọn các yêu cầu phát sinh gấp',
          en: 'Coordinated multiple touchpoints and resolved urgent dispatch changes calmly',
        },
        {
          vi: 'Giữ kỷ luật đối soát chứng từ và bàn giao rõ ràng',
          en: 'Maintained disciplined record verification and clean handovers',
        },
      ],
    },
    {
      id: 'exp-tech-builder',
      period: {
        vi: 'Song song · Độc lập',
        en: 'Ongoing · Independent',
      },
      role: {
        vi: 'Kỹ sư Phần mềm, Computer Vision & Automation',
        en: 'Software, Computer Vision & Automation Engineer',
      },
      organization: {
        vi: 'Dự án sản phẩm & Nghiên cứu ứng dụng',
        en: 'Product Engineering & Applied AI Projects',
      },
      domain: 'programming',
      description: {
        vi: 'Xây dựng hệ thống Fullstack Web/PWA & Mobile (Vistay, 36chan), ứng dụng thị giác máy tính & AR (Monitor AR, Camera AI trường học) và hệ thống tự động hóa chạy trên Linux/Docker (AutoVideoBot).',
        en: 'Building fullstack Web/PWA & Mobile platforms (Vistay, 36chan), Computer Vision & AR apps (Monitor AR, School AI Camera), and Linux/Docker automation pipelines (AutoVideoBot).',
      },
      achievements: [
        {
          vi: 'Triển khai được cả hai đầu: AI/Deep Learning (PyTorch, MediaPipe, Unity) lẫn sản phẩm Web/Mobile (Next.js, React Native, GraphQL)',
          en: 'Delivered across both applied AI/CV (PyTorch, MediaPipe, Unity) and production Web/Mobile stacks (Next.js, React Native, GraphQL)',
        },
        {
          vi: 'Biến công cụ tự động hóa (Docker, Playwright, video bot) thành đòn bẩy trực tiếp cho hoạt động tiếp thị và vận hành',
          en: 'Turned automation tooling (Docker, Playwright, video bots) into direct leverage for marketing and operations',
        },
      ],
    },
    {
      id: 'exp-commerce-marketing',
      period: {
        vi: 'Song song · Thực chiến',
        en: 'Ongoing · Hands-on',
      },
      role: {
        vi: 'Buôn bán, Quảng cáo sản phẩm & Tiếp thị viên',
        en: 'Commerce, Product Ads & Affiliate',
      },
      organization: {
        vi: 'Kinh doanh độc lập & Hợp tác nhãn hàng',
        en: 'Independent Commerce & Brand Partners',
      },
      domain: 'marketing',
      description: {
        vi: 'Trực tiếp kinh doanh sản phẩm, triển khai quảng cáo chuyển đổi và hợp tác tiếp thị viên với nhà cung cấp.',
        en: 'Running direct product sales, performance campaigns, and affiliate partnerships with suppliers.',
      },
      achievements: [
        {
          vi: 'Nắm trọn hành trình mua hàng từ điểm chạm quảng cáo tới khi giao nhận xong',
          en: 'Owned the full buyer journey from first ad impression through final delivery',
        },
        {
          vi: 'Ra quyết định dựa trên chi phí đơn thực thay vì chỉ số hiển thị bề nổi',
          en: 'Optimized decisions on real order economics rather than vanity reach metrics',
        },
      ],
    },
  ],

  collaborations: [
    {
      domain: 'programming',
      title: {
        vi: 'Web/Mobile, AI & Automation',
        en: 'Web/Mobile, AI & Automation',
      },
      description: {
        vi: 'Hệ thống Web/App, giải pháp Computer Vision / AI Camera hoặc công cụ tự động hóa.',
        en: 'Fullstack apps, Computer Vision / AI Camera solutions, or automation bots.',
      },
    },
    {
      domain: 'commerce',
      title: {
        vi: 'Nguồn hàng & Phân phối',
        en: 'Sourcing & Distribution',
      },
      description: {
        vi: 'Kết nối nguồn hàng tốt, hợp tác phân phối bán lẻ hoặc bán sỉ cùng phát triển.',
        en: 'Reliable product sourcing and retail or wholesale partnerships.',
      },
    },
    {
      domain: 'marketing',
      title: {
        vi: 'Quảng cáo & Tiếp thị viên',
        en: 'Product Ads & Affiliate',
      },
      description: {
        vi: 'Quảng bá sản phẩm, tiếp thị liên kết tập trung vào chuyển đổi đơn hàng thực.',
        en: 'Product promotion and affiliate campaigns focused on real orders.',
      },
    },
    {
      domain: 'logistics',
      title: {
        vi: 'Vận hành & Logistics',
        en: 'Operations & Logistics',
      },
      description: {
        vi: 'Kết nối đối tác hậu cần, trao đổi quy trình điều phối và tối ưu giao nhận.',
        en: 'Logistics networking and dispatch workflow exchange.',
      },
    },
  ],

  // THAY THÔNG TIN LIÊN HỆ THẬT CỦA BẠN TẠI ĐÂY
  social: {
    email: 'lienhe.portfolio@gmail.com',
    phone: '09xx xxx xxx',
    zalo: 'https://zalo.me/0900000000',
    facebook: 'https://facebook.com/',
    github: 'https://github.com/HIepNgoc2006',
  },
};
