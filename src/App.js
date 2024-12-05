import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import "./App.css";

function App() {
  const [localTime, setLocalTime] = useState(DateTime.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(DateTime.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1 className="title">Đồng Hồ Số</h1> {/* Tiêu đề */}
      <div className="clock">
        <h2>{localTime.toFormat("dd LLL yyyy")}</h2> {/* Ngày tháng */}
        <h1>{localTime.toFormat("HH:mm:ss")}</h1> {/* Đồng hồ chạy */}
      </div>
      {/* Phần giới thiệu */}
      <div className="intro">
        <h2>Đồng hồ Online là gì?</h2>
        <p>
          Khi bạn muốn biết "bây giờ là mấy giờ rồi?", thì bạn có thể sử dụng
          đồng hồ online để xem giờ, phút và giây ở thời điểm hiện tại.
        </p>
        <p>
          Để xem giờ hiện tại ở các nước và múi giờ khác nhau trên khắp thế
          giới, hãy sử dụng đồng hồ xem giờ thế giới của chúng tôi.
        </p>

        <h3>Làm thế nào để sử dụng Đồng hồ Online?</h3>
        <p>
          Đồng hồ online không phục vụ cho mục đích theo dõi quá trình thời gian
          trôi qua, bạn có thể sử dụng đồng hồ bấm giờ online, đồng hồ hẹn giờ
          online, hoặc đồng hồ báo thức online cho những mục đích này. Đối với
          đồng hồ online, những gì bạn cần làm là xem đồng hồ theo ngày cụ thể.
        </p>
        <ul>
          <li>Để xem giờ hiện tại trên đồng hồ số, nhấn vào nút Đồng hồ số.</li>
          <li>
            Để biết "Bây giờ là mấy giờ rồi?" trên đồng hồ kim, nhấn vào nút
            Đồng hồ kim.
          </li>
          <li>
            Để xem đồng hồ internet ở chế độ toàn màn hình, nhấn vào biểu tượng
            Toàn màn hình (có các mũi tên hướng ra ngoài) nằm ở góc trên cùng
            bên phải.
          </li>
        </ul>

        <h3>Đồng hồ Online hoạt động như thế nào?</h3>
        <p>
          Đồng hồ của chúng tôi là loại đồng hồ thông minh, sử dụng các thông
          tin từ máy tính hoặc điện thoại của bạn để hiển thị thời gian ở vị trí
          hiện tại của bạn. Nếu máy tính hoặc điện thoại của bạn được cài đặt
          ngày giờ không chính xác theo cách thủ công (thay vì giờ được đặt từ
          động của máy tính), đồng hồ online cũng sẽ hiển thị thời gian không
          chính xác. Bạn có thể điều chỉnh bằng cách cài đặt lại múi giờ và/hay
          thời gian chính xác cho thiết bị của mình.
        </p>

        <h3>Vì sao nên sử dụng Đồng hồ Online?</h3>
        <p>
          Bạn có thể sử dụng loại đồng hồ này cho mọi loại hình hoạt động, ví dụ
          như:
        </p>
        <ul>
          <li>Xem giờ ở thời điểm hiện tại theo số giờ, phút và giây.</li>
          <li>
            Xem đồng hồ online toàn màn hình để theo dõi giờ của một buổi kiểm
            tra, các hoạt động tại phòng học, trò chơi ban đêm hay trong lúc học
            tập/làm việc.
          </li>
          <li>Xem đồng hồ kim hoặc đồng hồ số trên màn hình.</li>
          <li>
            Loại đồng hồ toàn màn hình này có thể hỗ trợ bạn nếu bạn đang làm
            việc trong một phòng học và muốn cho học sinh biết giờ giấc tính
            bằng giây, đang điều hành việc thực hiện một bài tập theo nhóm trong
            một buổi họp tại nơi làm việc hoặc đang tập thể dục tại nhà. Với
            loại đồng hồ này, bạn có thể tiết kiệm được thời giờ và có được một
            công cụ hỗ trợ hiển thị giờ giấc hiện tại để giúp bạn theo dõi thời
            lượng còn lại trong quá trình thực hiện một phần việc nào đó.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
