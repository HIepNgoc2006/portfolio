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
        vi: 'Kinh doanh & Tư vấn Sức khỏe',
        en: 'Health Commerce & Wellness Coaching',
      },
      shortTitle: {
        vi: 'Kinh doanh & Sức khỏe',
        en: 'Commerce & Wellness',
      },
      subtitle: {
        vi: 'Kinh doanh thực phẩm sức khỏe (V99 Group) & tư vấn dinh dưỡng (Herbalife)',
        en: 'Health supplement sales (V99 Group) & wellness coaching (Herbalife)',
      },
      description: {
        vi: 'Kinh doanh và tư vấn trực tiếp các dòng thực phẩm bảo vệ sức khỏe tại V99 Group (biometech.info), kết hợp kinh nghiệm đồng hành như Huấn luyện viên Sức khỏe (Wellness Coach) tại Herbalife.',
        en: 'Direct sales and consultation for health & nutrition products at V99 Group (biometech.info), complemented by hands-on experience as a Herbalife Wellness Coach.',
      },
      highlights: [
        {
          vi: 'Tư vấn thực phẩm bảo vệ sức khỏe & chăm sóc khách hàng tại V99 Group',
          en: 'Health product sales, buyer consultation & follow-up at V99 Group',
        },
        {
          vi: 'Tư vấn chế độ dinh dưỡng cá nhân hóa & đồng hành thói quen sống lành mạnh (Herbalife)',
          en: 'Personalized nutrition guidance & healthy habit coaching (Herbalife)',
        },
      ],
      tags: ['V99 Group', 'Herbalife', 'Health & Wellness', 'Consultative Sales', 'CRM'],
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
        vi: 'Hậu cần Vật tư Phẫu thuật — Viện Việt Đức',
        en: 'Surgical Supply Logistics — Viet Duc Hospital',
      },
      shortTitle: {
        vi: 'Hậu cần Việt Đức',
        en: 'Viet Duc Logistics',
      },
      subtitle: {
        vi: 'Vận chuyển, phân loại & đưa đi khử trùng đinh vít phẫu thuật cho Kho Kỹ Thuật Cao',
        en: 'Transport, sorting & sterilization flow of surgical implants for High-Tech Storage',
      },
      description: {
        vi: 'Đảm nhiệm khâu vận chuyển đinh vít phẫu thuật, phân loại chính xác từng chủng loại và thực hiện quy trình mang đi khử trùng/tiệt khuẩn phục vụ Kho Kỹ Thuật Cao tại Bệnh viện Hữu nghị Việt Đức.',
        en: 'Responsible for transporting surgical screws and implants, sorting by exact specification, and managing sterilization turnaround for the High-Tech Storage unit at Viet Duc University Hospital.',
      },
      highlights: [
        {
          vi: 'Vận chuyển và phân loại chính xác đinh vít, dụng cụ phẫu thuật theo từng bộ',
          en: 'Accurate transport and classification of surgical screws and instrument sets',
        },
        {
          vi: 'Đưa đi khử trùng/tiệt khuẩn và bàn giao đúng tiến độ cho Kho Kỹ Thuật Cao',
          en: 'Sterilization handoff and on-time return to High-Tech Surgical Storage',
        },
      ],
      tags: ['Bệnh viện Việt Đức', 'Kho Kỹ Thuật Cao', 'Vật tư Phẫu thuật', 'Khử trùng', 'Kiểm soát'],
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
        vi: 'Camera AI Trường học (Bình Minh Group) — Nhận diện học sinh & hành vi',
        en: 'School AI Camera (Binh Minh Group) — Student Count & Behavior Vision',
      },
      summary: {
        vi: 'Phát triển ứng dụng App/Web và hệ thống Camera tích hợp AI tại Bình Minh Group: nhận diện số lượng học sinh, điểm danh, chấm công giáo viên và phân tích hành vi (xả rác, hút thuốc, đồng phục, PPE bếp).',
        en: 'Built App/Web interfaces and multi-task AI Camera workflows at Binh Minh Group: student counting, attendance, staff timekeeping, and safety behavior detection.',
      },
      metric: {
        vi: 'App/Web + 7 nghiệp vụ Camera AI tại Bình Minh Group',
        en: 'App/Web + 7 AI Camera workflows at Binh Minh Group',
      },
      role: {
        vi: 'App & Web Developer — Bình Minh Group',
        en: 'App & Web Developer — Binh Minh Group',
      },
      period: '2026',
      tags: ['Bình Minh Group', 'App & Web', 'Python', 'Computer Vision', 'ANSVIS'],
      details: {
        context: {
          vi: 'Nhà trường cần hệ thống phần mềm giám sát thông minh qua camera để tự động đếm/điểm danh học sinh và cảnh báo sớm các hành vi mất an toàn trong khuôn viên.',
          en: 'Schools needed smart camera software to automate student counting/attendance and surface real-time campus safety alerts.',
        },
        solution: {
          vi: 'Tham gia phát triển phần mềm App & Web tại Bình Minh Group kết nối luồng phân tích AI Camera cho 7 chức năng thực tế (nhận diện số lượng & điểm danh học sinh, chấm công giáo viên, xả rác, nghi vấn hút thuốc, đồng phục, PPE bếp và chỉ số biểu cảm).',
          en: 'Developed App & Web components at Binh Minh Group integrated with 7 Computer Vision workstreams covering attendance, student counting, kitchen PPE, uniforms, and safety alerts.',
        },
        impact: {
          vi: 'Đưa bài toán camera AI trường học thành hệ thống vận hành rõ ràng, dễ theo dõi trên giao diện quản trị và sẵn sàng triển khai thực tế.',
          en: 'Delivered a structured, verifiable school AI monitoring platform ready for operational deployment.',
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
      id: 'proj-autovideobot',
      domain: 'programming',
      title: {
        vi: 'AutoVideoBot — Hệ thống tự động tạo & đăng video YouTube 24/7',
        en: 'AutoVideoBot — Unattended Daily YouTube Video Pipeline',
      },
      summary: {
        vi: 'Bot Python vận hành tự động trên Ubuntu Server 24 bằng Systemd & Docker: dùng Gemini API viết kịch bản, MoneyPrinterTurbo dựng video trên RAM Disk (/dev/shm) và tự động upload qua YouTube Data API.',
        en: 'Automated Python pipeline on Ubuntu Server 24 (Systemd + Docker): Gemini API scripting, MoneyPrinterTurbo video rendering over RAM Disk (/dev/shm), and quota-safe YouTube Data API uploads.',
      },
      metric: {
        vi: 'Tự động hóa 24/7 qua Systemd + tối ưu RAM Disk (/dev/shm)',
        en: '24/7 Systemd service with RAM Disk (/dev/shm) I/O optimization',
      },
      role: {
        vi: 'Python & Linux Automation Developer',
        en: 'Python & Linux Automation Developer',
      },
      period: '2026',
      tags: ['Python', 'Docker', 'Ubuntu Systemd', 'Gemini API', 'YouTube API'],
      details: {
        context: {
          vi: 'Cần tự động hóa trọn gói quy trình sản xuất và đăng video ngắn hàng ngày lên YouTube trên máy chủ tự vận hành (Ubuntu Server 24, cấu hình phần cứng tiết kiệm) mà không bị gián đoạn hay tràn ổ đĩa.',
          en: 'Needed a self-hosted daily video production and YouTube publishing pipeline running reliably on modest Ubuntu Server 24 hardware without manual intervention or disk exhaustion.',
        },
        solution: {
          vi: 'Thiết kế orchestrator Python kết nối Gemini API viết kịch bản, gọi MoneyPrinterTurbo đóng gói trong Docker để dựng video, chuyển thư mục xử lý tạm lên RAM Disk (/dev/shm) để tránh nghẽn I/O ổ cứng, tự động dọn rác tệp cũ, kiểm soát YouTube API quota và cấu hình Systemd Service tự hồi sinh.',
          en: 'Built a Python orchestrator pairing Gemini API scripting with Dockerized MoneyPrinterTurbo, routed scratch renders to RAM Disk (/dev/shm) to eliminate HDD bottlenecks, added automatic garbage collection, enforced YouTube API quota guards, and wrapped the scheduler in an auto-restarting Systemd service.',
        },
        impact: {
          vi: 'Hệ thống chạy ổn định không cần thao tác thủ công trên phần cứng gọn nhẹ, tăng tốc xử lý I/O đáng kể và tránh lỗi hết hạn token hoặc tràn bộ nhớ.',
          en: 'Delivered a resilient, low-overhead publishing server with fast temporary I/O, automatic recovery, and strict quota/storage safety.',
        },
      },
    },
    {
      id: 'proj-adn',
      domain: 'programming',
      title: {
        vi: 'ADN — Nền tảng Mô phỏng Lão hóa Tế bào & Tái lập trình In-Silico',
        en: 'ADN — Cellular Senescence & In-Silico Reprogramming Workbench',
      },
      summary: {
        vi: 'Ứng dụng nghiên cứu sinh học tính toán (Python & Streamlit) mô phỏng lão hóa tế bào cấp mạng điều hòa gen Boolean (MaBoSS), kiểm chứng trên dữ liệu scRNA-seq (GSE130973) và CellAge 279 gen.',
        en: 'Open-source computational biology workbench (Python & Streamlit) simulating cellular senescence via Boolean gene regulatory networks (MaBoSS), validated against scRNA-seq (GSE130973) and 279 CellAge genes.',
      },
      metric: {
        vi: 'Streamlit Workbench · MaBoSS · scRNA-seq (GSE130973) · MIT',
        en: 'Streamlit Workbench · MaBoSS · scRNA-seq (GSE130973) · MIT',
      },
      role: {
        vi: 'Computational Biology & Python Developer',
        en: 'Computational Biology & Python Developer',
      },
      period: '2026',
      tags: ['Python', 'Streamlit', 'MaBoSS', 'scRNA-seq', 'SBML', 'CI/CD'],
      details: {
        context: {
          vi: 'Xây dựng công cụ mô phỏng tính toán mở giúp khảo sát trạng thái lão hóa tế bào (cellular senescence) và kịch bản tái lập trình một phần (OSK / Ink4a-Arf) mà có thể kiểm chứng trực tiếp bằng dữ liệu thực nghiệm.',
          en: 'Built an open-source in-silico workbench to explore cellular senescence dynamics and partial reprogramming perturbations (OSK / Ink4a-Arf) grounded in empirical single-cell data.',
        },
        solution: {
          vi: 'Phát triển kiến trúc mô-đun Python gồm pipeline xử lý scRNA-seq (GSE130973) & SenMayo scoring, mô phỏng mạng gen Boolean MaBoSS (3D Waddington landscape, sensitivity analysis), mô-đun lý sinh (Michaelis-Menten ODE, 3D Molecular Docking ΔG, Horvath Epigenetic Clock), xuất SBML Level 3 XML và giao diện tương tác Streamlit kèm GitHub Actions CI.',
          en: 'Engineered modular Python packages covering GSE130973 scRNA-seq QC & SenMayo scoring, MaBoSS stochastic Boolean simulations (3D Waddington landscape, Sobol sensitivity), biophysics modules (Michaelis-Menten ODE, 3D Molecular Docking ΔG, Horvath Epigenetic Clock), SBML Level 3 export, and an interactive Streamlit dashboard with GitHub Actions CI.',
        },
        impact: {
          vi: 'Hoàn thiện bộ công cụ nghiên cứu mã nguồn mở (MIT License) có trích dẫn khoa học rõ ràng, tái lập được kết quả và dễ thao tác trực quan qua trình duyệt.',
          en: 'Shipped a reproducible, MIT-licensed research workbench with formal scientific citations and an accessible browser interface.',
        },
      },
      link: 'https://github.com/HIepNgoc2006/ADN',
    },
    {
      id: 'proj-commerce-channel',
      domain: 'commerce',
      title: {
        vi: 'Kinh doanh Thực phẩm Sức khỏe (V99 Group) & Wellness Coach (Herbalife)',
        en: 'Health Supplement Sales (V99 Group) & Wellness Coach (Herbalife)',
      },
      summary: {
        vi: 'Trực tiếp tư vấn, bán hàng các dòng sản phẩm chăm sóc sức khỏe tại V99 Group (biometech.info) và đồng hành tư vấn chế độ dinh dưỡng theo mô hình Huấn luyện viên Sức khỏe Herbalife.',
        en: 'Direct consultative sales of health supplements at V99 Group (biometech.info) paired with personalized nutrition and lifestyle coaching at Herbalife.',
      },
      metric: {
        vi: 'Tư vấn dựa trên nhu cầu thực & đồng hành dài hạn cùng khách',
        en: 'Need-based health consultation & long-term customer care',
      },
      role: {
        vi: 'Tư vấn kinh doanh & Huấn luyện viên Sức khỏe',
        en: 'Health Sales & Wellness Coach',
      },
      period: 'V99 Group · Herbalife',
      tags: ['V99 Group', 'biometech.info', 'Herbalife', 'Dinh dưỡng', 'Tư vấn'],
      details: {
        context: {
          vi: 'Sản phẩm sức khỏe và dinh dưỡng đòi hỏi sự tin tưởng cao — khách hàng cần người lắng nghe thể trạng, giải thích rõ cách dùng và theo sát quá trình sử dụng thay vì bán đứt đoạn.',
          en: 'Health and nutrition products require high trust — customers expect attentive assessment, clear usage guidance, and ongoing follow-up rather than one-off selling.',
        },
        solution: {
          vi: 'Kinh doanh các dòng thực phẩm bảo vệ sức khỏe tại V99 Group (biometech.info) kết hợp áp dụng tư duy Huấn luyện viên Sức khỏe (Herbalife): đánh giá mục tiêu sức khỏe, gợi ý thói quen ăn uống/sinh hoạt hợp lý và theo dõi tiến trình định kỳ.',
          en: 'Managed direct health product sales at V99 Group (biometech.info) alongside Herbalife Wellness Coach practices: assessing goals, guiding practical daily nutrition habits, and checking in consistently.',
        },
        impact: {
          vi: 'Rèn kỹ năng giao tiếp thuyết phục, lắng nghe insight khách hàng sâu sắc và xây dựng uy tín cá nhân bền vững trong nhóm sản phẩm chăm sóc sức khỏe.',
          en: 'Sharpened consultative communication, customer empathy, and long-term trust building across health & wellness.',
        },
      },
      link: 'https://biometech.info',
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
        vi: 'Hậu cần Đinh vít Phẫu thuật — Kho Kỹ Thuật Cao, Bệnh viện Việt Đức',
        en: 'Surgical Implant Logistics — High-Tech Storage, Viet Duc Hospital',
      },
      summary: {
        vi: 'Thực hiện nhiệm vụ vận chuyển đinh vít phẫu thuật, phân loại đúng quy cách và đưa đi khử trùng/tiệt khuẩn phục vụ Kho Kỹ Thuật Cao tại Bệnh viện Hữu nghị Việt Đức.',
        en: 'Handling transport, classification, and sterilization turnaround for surgical screws and implants supporting High-Tech Storage at Viet Duc University Hospital.',
      },
      metric: {
        vi: 'Phân loại chuẩn xác · Khử trùng đúng quy trình cho Kho Kỹ Thuật Cao',
        en: 'Exact sorting & sterile turnaround for surgical storage',
      },
      role: {
        vi: 'Nhân sự Hậu cần Vật tư Phẫu thuật',
        en: 'Surgical Supply Logistics Staff',
      },
      period: 'Bệnh viện Việt Đức',
      tags: ['Bệnh viện Việt Đức', 'Kho Kỹ Thuật Cao', 'Đinh vít Phẫu thuật', 'Khử trùng'],
      details: {
        context: {
          vi: 'Kho Kỹ Thuật Cao tại Bệnh viện Hữu nghị Việt Đức quản lý lượng lớn đinh vít và vật tư phẫu thuật chuyên sâu, mọi khâu vận chuyển, phân loại và khử trùng đều phải chính xác tuyệt đối để kịp lịch mổ.',
          en: 'High-Tech Storage at Viet Duc University Hospital handles specialized surgical screws and implants where transport, sorting, and sterilization accuracy directly affect surgical schedules.',
        },
        solution: {
          vi: 'Trực tiếp nhận điều phối vận chuyển vật tư, kiểm đếm phân loại cẩn thận theo đúng chủng loại/kích cỡ, bàn giao khâu khử trùng/tiệt khuẩn và hoàn trả đầy đủ về Kho Kỹ Thuật Cao.',
          en: 'Executed direct transport assignments, verified and sorted surgical screws by specification, coordinated sterilization processing, and returned sterile kits accurately to High-Tech Storage.',
        },
        impact: {
          vi: 'Đảm bảo vật tư phẫu thuật luôn sẵn sàng, đúng chuẩn và rèn luyện tính cẩn trọng, chịu áp lực tốt trong môi trường y tế tuyến đầu.',
          en: 'Kept critical surgical supplies ready on schedule while building high-discipline attention to detail under clinical pressure.',
        },
      },
    },
  ],

  experiences: [
    {
      id: 'exp-binhminh',
      period: {
        vi: 'Bình Minh Group',
        en: 'Binh Minh Group',
      },
      role: {
        vi: 'Lập trình viên App & Web — Dự án Camera AI Trường học',
        en: 'App & Web Developer — School AI Camera Project',
      },
      organization: {
        vi: 'Bình Minh Group',
        en: 'Binh Minh Group',
      },
      domain: 'programming',
      description: {
        vi: 'Tham gia phát triển ứng dụng App và Web cho hệ thống Camera tích hợp AI tại trường học, hỗ trợ nhận diện số lượng học sinh, điểm danh và phát hiện hành vi.',
        en: 'Developed App and Web software for an AI-integrated school camera platform covering student counting, attendance, and behavior detection.',
      },
      achievements: [
        {
          vi: 'Xây dựng giao diện quản trị và luồng ứng dụng App/Web kết nối dữ liệu từ hệ thống Camera AI',
          en: 'Built App/Web interfaces and workflows connected to live AI Camera analytics',
        },
        {
          vi: 'Triển khai song song các dự án cá nhân chuyên sâu: Monitor AR (Unity/PyTorch), Vistay (React Native/GraphQL), 36chan (Next.js PWA) & AutoVideoBot',
          en: 'Built independent engineering projects in parallel: Monitor AR (Unity/PyTorch), Vistay (React Native/GraphQL), 36chan (Next.js PWA) & AutoVideoBot',
        },
      ],
    },
    {
      id: 'exp-vietduc',
      period: {
        vi: 'Kho Kỹ Thuật Cao',
        en: 'High-Tech Storage',
      },
      role: {
        vi: 'Hậu cần & Điều phối Vật tư Phẫu thuật',
        en: 'Surgical Supply Logistics Coordinator',
      },
      organization: {
        vi: 'Bệnh viện Hữu nghị Việt Đức',
        en: 'Viet Duc University Hospital',
      },
      domain: 'logistics',
      description: {
        vi: 'Nhận nhiệm vụ vận chuyển đinh vít phẫu thuật, phân loại đúng chủng loại và mang đi khử trùng phục vụ Kho Kỹ Thuật Cao tại Bệnh viện Hữu nghị Việt Đức.',
        en: 'Handled transport, specification sorting, and sterilization turnaround of surgical screws and implants for High-Tech Storage at Viet Duc University Hospital.',
      },
      achievements: [
        {
          vi: 'Vận chuyển, kiểm đếm và phân loại chính xác các bộ đinh vít phẫu thuật theo yêu cầu kho',
          en: 'Transported, counted, and sorted surgical screw sets accurately to storage specs',
        },
        {
          vi: 'Đảm bảo quy trình mang đi khử trùng và bàn giao lại đúng tiến độ, không để xảy ra nhầm lẫn',
          en: 'Maintained punctual sterilization handoffs with zero mix-ups',
        },
      ],
    },
    {
      id: 'exp-v99-herbalife',
      period: {
        vi: 'Kinh doanh & Sức khỏe',
        en: 'Commerce & Wellness',
      },
      role: {
        vi: 'Kinh doanh Thực phẩm Sức khỏe & Huấn luyện viên Sức khỏe',
        en: 'Health Product Sales & Wellness Coach',
      },
      organization: {
        vi: 'V99 Group (biometech.info) · Herbalife',
        en: 'V99 Group (biometech.info) · Herbalife',
      },
      domain: 'commerce',
      description: {
        vi: 'Tư vấn, kinh doanh thực phẩm bảo vệ sức khỏe tại V99 Group (biometech.info) và tham gia vai trò Huấn luyện viên Sức khỏe tại Herbalife — kết hợp kinh nghiệm quảng cáo & tiếp thị sản phẩm.',
        en: 'Direct sales of health supplements at V99 Group (biometech.info) and Wellness Coach activities with Herbalife, alongside product advertising and affiliate marketing.',
      },
      achievements: [
        {
          vi: 'Tư vấn trực tiếp sản phẩm chăm sóc sức khỏe, lắng nghe nhu cầu và giữ mối quan hệ tốt với khách hàng',
          en: 'Consulted directly on health products with strong buyer empathy and follow-up',
        },
        {
          vi: 'Đồng hành hướng dẫn dinh dưỡng, thói quen sinh hoạt lành mạnh theo mô hình Wellness Coach của Herbalife',
          en: 'Guided clients on balanced nutrition and daily wellness habits under Herbalife’s coaching model',
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

  // Thông tin liên hệ chính thức
  social: {
    email: 'hiepnn9999@gmail.com',
    phone: '0913 913 965',
    zalo: 'https://zalo.me/0913913965',
    facebook: 'https://www.facebook.com/hiep.nguyen.8100/',
    github: 'https://github.com/HIepNgoc2006',
  },
};
