const portfolio = {
  student: {
    name: "Lưu Ngọc Huyền",
    id: "22100356",
    school: "Đại học Y Dược - ĐHQGHN",
    course: "[VNU1001_E252025] Nhập môn CNS&AI",
    major: "Răng Hàm Mặt",
    interest: "Răng Hàm Mặt, y tế số, AI trong học tập khối sức khỏe"
  },
  modules: [
    {
      code: "01",
      title: "Quản lý tệp và thư mục",
      focus: "Hồ sơ tài liệu nha khoa",
      pdf: "files/module-01.pdf",
      sourceFile: "Tuần 1.pdf",
      featured: false,
      tags: ["Mục tiêu", "Quá trình", "Kết quả", "Bài học", "Ứng dụng"],
      excerpt:
        "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin, thư mục trên Windows để tổ chức tài liệu học tập rõ ràng.",
      sections: {
        "Mục tiêu":
          "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin, thư mục trên hệ điều hành Windows.",
        "Tóm tắt quá trình":
          "Sinh viên thực hành mở File Explorer, truy cập ổ đĩa, tạo thư mục cá nhân, tạo tệp GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, tạo thư mục con TaiLieu, sao chép, di chuyển, xóa tệp và khôi phục từ thùng rác.",
        "Kết quả":
          "Hoàn thành đầy đủ các thao tác quản lý tệp cơ bản. Sinh viên biết cách tổ chức thư mục học tập rõ ràng, thuận tiện cho lưu trữ tài liệu và minh chứng bài tập.",
        "Bài học":
          "Quản lý tệp là kỹ năng nền tảng trong học tập số. Khi tài liệu được sắp xếp khoa học, người học giảm thất lạc file, dễ truy xuất và dễ kiểm soát phiên bản tài liệu.",
        "Ứng dụng thực tế":
          "Trong học tập Răng Hàm Mặt, sinh viên cần quản lý giáo trình, ảnh minh chứng, bài báo chuyên ngành, slide lâm sàng và tài liệu thực hành. Kỹ năng tổ chức thư mục giúp học tập có hệ thống và chuyên nghiệp hơn."
      }
    },
    {
      code: "02",
      title: "Tìm kiếm và đánh giá thông tin học thuật",
      focus: "Bảo tồn tủy sống",
      pdf: "files/module-02.pdf",
      sourceFile: "Tuần 2.pdf",
      featured: true,
      tags: ["AAE", "VPT", "MTA", "Vật liệu sinh học"],
      excerpt:
        "Tìm kiếm và đánh giá tài liệu học thuật về liệu pháp bảo tồn tủy sống theo hướng dẫn của AAE.",
      sections: {
        "Mục tiêu":
          "Tìm kiếm và đánh giá thông tin học thuật về liệu pháp bảo tồn tủy sống (VPT) theo hướng dẫn của AAE.",
        "Tóm tắt quá trình":
          "Sinh viên nghiên cứu các kỹ thuật trong bảo tồn tủy sống như che tủy trực tiếp, lấy tủy buồng một phần theo kỹ thuật Cvek và lấy tủy buồng toàn bộ. Báo cáo cũng phân tích vai trò của vật liệu sinh học như MTA và nhóm vật liệu sinh học trong tiên lượng điều trị.",
        "Kết quả":
          "Sinh viên xây dựng bảng tổng hợp nguồn tham khảo và đánh giá độ tin cậy, gồm tuyên bố lập trường của AAE, tạp chí Nội nha, cơ sở dữ liệu Cochrane, sách chuyên khảo và các bài báo khoa học liên quan đến VPT.",
        "Bài học":
          "Trong Răng Hàm Mặt, việc đọc và đánh giá tài liệu cần dựa trên hướng dẫn lâm sàng, bài báo khoa học và nguồn có độ tin cậy cao. Không thể chỉ dựa vào thông tin phổ thông khi xử lý chủ đề liên quan đến điều trị.",
        "Ứng dụng thực tế":
          "Kiến thức về VPT giúp sinh viên hiểu rõ xu hướng bảo tồn mô tủy, duy trì cấu trúc răng và áp dụng tư duy điều trị ít xâm lấn trong nha khoa hiện đại."
      }
    },
    {
      code: "03",
      title: "Viết câu lệnh AI hiệu quả",
      focus: "Câu lệnh học tập với AI",
      pdf: "files/module-03.pdf",
      sourceFile: "Tuần 3.pdf",
      featured: false,
      tags: ["Câu lệnh AI", "Tóm tắt", "Hệ chuyên gia", "Ôn tập"],
      excerpt:
        "Tối ưu hóa câu lệnh AI để hỗ trợ tóm tắt tài liệu, giải thích khái niệm phức tạp và tạo câu hỏi ôn tập.",
      sections: {
        "Mục tiêu":
          "Tối ưu hóa kỹ năng viết câu lệnh AI để hỗ trợ các tác vụ học tập như tóm tắt tài liệu, giải thích khái niệm phức tạp và tạo câu hỏi ôn tập.",
        "Tóm tắt quá trình":
          "Sinh viên xây dựng các phiên bản câu lệnh AI cơ bản, cải tiến và nâng cao cho ba tác vụ. Nội dung gồm tóm tắt tài liệu học thuật, giải thích khái niệm “Hệ chuyên gia” và tạo câu hỏi ôn tập về ngoại khoa cơ sở.",
        "Kết quả":
          "Sinh viên nhận thấy câu lệnh AI có vai trò, yêu cầu rõ ràng, giới hạn nội dung và tiêu chí đầu ra cụ thể giúp AI phản hồi chính xác, dễ dùng và có cấu trúc hơn. Câu lệnh nâng cao giúp giảm tình trạng trả lời chung chung hoặc bỏ sót luận điểm quan trọng.",
        "Bài học":
          "Câu lệnh AI hiệu quả cần có mục tiêu, bối cảnh, đối tượng đọc, định dạng đầu ra và yêu cầu kiểm chứng. Người học vẫn cần đánh giá lại kết quả thay vì sử dụng nguyên văn đầu ra của AI.",
        "Ứng dụng thực tế":
          "Câu lệnh AI tốt có thể hỗ trợ tóm tắt bài báo nha khoa, giải thích khái niệm lâm sàng, tạo câu hỏi ôn tập, hệ thống hóa kiến thức ngoại khoa cơ sở và chuẩn bị nội dung học tập cá nhân."
      }
    },
    {
      code: "04",
      title: "Hợp tác trực tuyến trong dự án nhóm",
      focus: "Nhổ răng thông thường",
      pdf: "files/module-04.pdf",
      sourceFile: "Tuần 4.pdf",
      featured: true,
      tags: ["Trello", "Google Docs", "Canva", "Nhổ răng"],
      excerpt:
        "Ứng dụng công cụ hợp tác số để thực hiện dự án nhóm về kỹ thuật nhổ răng thông thường.",
      sections: {
        "Mục tiêu":
          "Ứng dụng công cụ hợp tác số để quản lý và thực hiện dự án nhóm “Tìm hiểu về kỹ thuật nhổ răng thông thường”.",
        "Tóm tắt quá trình":
          "Nhóm sử dụng Trello để phân công công việc, Google Docs để soạn thảo nội dung, Google Drive để lưu trữ tài liệu, Zalo/Zoom/Messenger để trao đổi và Canva để tạo bản trình bày. Trong nhóm, Lưu Ngọc Huyền phụ trách thiết kế bản thuyết trình và trình bày dữ liệu.",
        "Kết quả":
          "Nhóm xây dựng được quy trình làm việc trực tuyến, phân công nhiệm vụ rõ ràng, cập nhật tiến độ hằng ngày, tổ chức họp online và hoàn thiện bản trình bày về kỹ thuật nhổ răng thông thường.",
        "Bài học":
          "Hợp tác trực tuyến hiệu quả cần phân công rõ vai trò, cập nhật tiến độ đúng hạn và lưu trữ tài liệu tập trung. Công cụ số chỉ phát huy tác dụng khi nhóm có quy trình sử dụng thống nhất.",
        "Ứng dụng thực tế":
          "Trong học tập lâm sàng nha khoa, làm việc nhóm giúp hệ thống hóa quy trình thủ thuật, chuẩn bị bệnh nhân, chuẩn bị dụng cụ, kiểm soát kỹ thuật và trình bày kiến thức thực hành rõ ràng hơn."
      }
    },
    {
      code: "05",
      title: "Sáng tạo nội dung với AI",
      focus: "Infographic học tập",
      pdf: "files/module-05.pdf",
      sourceFile: "Tuần 5.pdf",
      featured: false,
      tags: ["Gemini", "DALL-E 3", "Canva AI", "Infographic"],
      excerpt:
        "Phối hợp nhiều công cụ AI để xây dựng infographic về văn hóa, ẩm thực và du lịch Phú Thọ.",
      sections: {
        "Mục tiêu":
          "Ứng dụng các công cụ AI tạo sinh để xây dựng sản phẩm infographic về chủ đề “Khám phá Ẩm thực và Văn hóa Phú Thọ”.",
        "Tóm tắt quá trình":
          "Sinh viên sử dụng Gemini để tạo nội dung văn bản, DALL-E 3/NanoBanana để tạo hình ảnh minh họa và Canva AI Design để thiết kế infographic. Nội dung tập trung vào các yếu tố văn hóa, ẩm thực và du lịch Phú Thọ như thịt chua Thanh Sơn, bánh tai, Đền Hùng và Hát Xoan.",
        "Kết quả":
          "Sinh viên hoàn thành sản phẩm infographic có bố cục trực quan, màu sắc sinh động và nội dung được chỉnh sửa lại từ đầu ra AI. Quá trình thể hiện khả năng phối hợp nhiều công cụ AI trong sáng tạo nội dung số.",
        "Bài học":
          "AI có thể hỗ trợ nhanh trong việc lên ý tưởng, tạo văn bản, tạo ảnh và gợi ý bố cục, nhưng sản phẩm cuối cùng cần con người kiểm tra, chỉnh sửa, chọn lọc và đảm bảo tính phù hợp văn hóa.",
        "Ứng dụng thực tế":
          "Kỹ năng tạo infographic có thể áp dụng vào truyền thông sức khỏe răng miệng, hướng dẫn chăm sóc răng, thiết kế tài liệu giáo dục bệnh nhân và trình bày kiến thức nha khoa theo cách dễ hiểu hơn."
      }
    },
    {
      code: "06",
      title: "AI có trách nhiệm trong học thuật",
      focus: "Đạo đức học thuật khi dùng AI",
      pdf: "files/module-06.pdf",
      sourceFile: "Tuần 6.pdf",
      featured: false,
      tags: ["Minh bạch", "Kiểm chứng", "Bảo mật", "Y Dược"],
      excerpt:
        "Thực hành nguyên tắc sử dụng AI có trách nhiệm trong học thuật, đặc biệt trong khối ngành sức khỏe.",
      sections: {
        "Mục tiêu":
          "Hiểu và thực hành nguyên tắc sử dụng AI có trách nhiệm trong học thuật, đặc biệt trong bối cảnh khối ngành sức khỏe và Y Dược.",
        "Tóm tắt quá trình":
          "Sinh viên phân tích chính sách sử dụng AI tại Đại học Quốc gia Hà Nội và Trường Đại học Y Dược, sau đó thực hiện nhiệm vụ học tập liên quan đến tổng quan y văn trong Dược lâm sàng. Báo cáo ghi lại câu lệnh AI, đầu ra AI, quá trình đánh giá, chỉnh sửa, kiểm chứng nguồn và trích dẫn minh bạch.",
        "Kết quả":
          "Sinh viên nhận diện được các rủi ro như dùng AI để viết thay bài, bịa số liệu, đưa khuyến nghị chuyên môn chưa kiểm chứng hoặc vi phạm bảo mật dữ liệu. Báo cáo nhấn mạnh việc kiểm chứng chéo với nguồn học thuật và cơ sở dữ liệu uy tín.",
        "Bài học":
          "Trong khối ngành sức khỏe, AI chỉ nên đóng vai trò hỗ trợ. Người học cần kiểm tra tính chính xác, trích dẫn minh bạch, không nhập dữ liệu nhạy cảm và không để AI thay thế tư duy chuyên môn.",
        "Ứng dụng thực tế":
          "Sử dụng AI có trách nhiệm giúp sinh viên Răng Hàm Mặt khai thác công nghệ để học nhanh hơn nhưng vẫn giữ chuẩn mực học thuật, bảo mật thông tin bệnh nhân và thận trọng với mọi nội dung có liên quan đến lâm sàng."
      }
    }
  ],
  outcomes: [
    {
      title: "Đã học được",
      text:
        "Qua 6 bài tập, sinh viên học được cách quản lý tài liệu số, tìm kiếm và đánh giá nguồn học thuật, viết câu lệnh AI hiệu quả, hợp tác trực tuyến, sáng tạo nội dung bằng AI và sử dụng AI có trách nhiệm."
    },
    {
      title: "Kỹ năng cải thiện",
      text:
        "Các kỹ năng được cải thiện gồm tổ chức dữ liệu, đọc tài liệu chuyên ngành, đánh giá nguồn tin, tư duy phản biện, làm việc nhóm, thiết kế nội dung trực quan và kiểm soát chất lượng đầu ra của AI."
    },
    {
      title: "Khó khăn",
      text:
        "Khó khăn chính là xử lý thuật ngữ chuyên ngành, chọn lọc nguồn y khoa đáng tin cậy, viết câu lệnh AI đủ rõ, phối hợp nhóm đúng tiến độ và kiểm chứng thông tin do AI tạo ra."
    },
    {
      title: "Cách khắc phục",
      text:
        "Sinh viên khắc phục bằng cách chia nhỏ nhiệm vụ, ưu tiên nguồn học thuật, sử dụng công cụ quản lý nhóm, kiểm tra lại nội dung AI, chỉnh sửa sản phẩm cuối cùng và lưu trữ tài liệu có hệ thống."
    },
    {
      title: "Định hướng tương lai",
      text:
        "Các kỹ năng này có thể tiếp tục áp dụng vào học tập Răng Hàm Mặt, đọc y văn, làm báo cáo nhóm, chuẩn bị slide lâm sàng, thiết kế tài liệu truyền thông sức khỏe răng miệng và sử dụng AI hỗ trợ học tập một cách thận trọng."
    },
    {
      title: "Liên hệ Răng Hàm Mặt",
      text:
        "Portfolio cho thấy công nghệ số và AI có thể hỗ trợ hiệu quả cho học tập nha khoa nếu được sử dụng đúng cách. Điều quan trọng là kết hợp công nghệ với tư duy kiểm chứng, đạo đức học thuật và trách nhiệm trong khối ngành sức khỏe."
    }
  ]
};
