import { FC } from "react";
import { SvgComponentType } from "@/interfaces";

const Chain: FC<SvgComponentType> = ({ color = "#6171FF" }) => {
	return (
		<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M33.2348 7.92765C33.8114 7.33071 34.501 6.85457 35.2636 6.52701C36.0261 6.19946 36.8462 6.02704 37.6761 6.01983C38.506 6.01262 39.329 6.17076 40.0971 6.48501C40.8652 6.79927 41.563 7.26335 42.1498 7.85018C42.7366 8.43701 43.2007 9.13483 43.515 9.90294C43.8292 10.671 43.9874 11.494 43.9802 12.3239C43.9729 13.1538 43.8005 13.9739 43.473 14.7364C43.1454 15.499 42.6693 16.1886 42.0723 16.7651L32.6973 26.1401C31.5253 27.3118 29.9359 27.9701 28.2786 27.9701C26.6213 27.9701 25.0319 27.3118 23.8598 26.1401C23.2705 25.5709 22.4811 25.2559 21.6617 25.263C20.8424 25.2702 20.0586 25.5988 19.4792 26.1782C18.8998 26.7576 18.5711 27.5414 18.564 28.3608C18.5569 29.1801 18.8719 29.9695 19.4411 30.5589C21.7852 32.9023 24.964 34.2187 28.2786 34.2187C31.5931 34.2187 34.772 32.9023 37.1161 30.5589L46.4911 21.1839C48.7681 18.8264 50.028 15.6688 49.9995 12.3914C49.971 9.11392 48.6564 5.97877 46.3388 3.66117C44.0212 1.34356 40.8861 0.0289528 37.6086 0.000472533C34.3312 -0.0280077 31.1736 1.23192 28.8161 3.5089L24.1286 8.1964C23.8301 8.48467 23.5921 8.8295 23.4283 9.21076C23.2645 9.59202 23.1783 10.0021 23.1747 10.417C23.1711 10.832 23.2502 11.2435 23.4073 11.6275C23.5644 12.0116 23.7964 12.3605 24.0899 12.6539C24.3833 12.9473 24.7322 13.1793 25.1162 13.3365C25.5003 13.4936 25.9118 13.5727 26.3267 13.5691C26.7417 13.5655 27.1517 13.4792 27.533 13.3155C27.9142 13.1517 28.2591 12.9136 28.5473 12.6151L33.2348 7.92765ZM17.6098 23.5527C18.7819 22.381 20.3713 21.7227 22.0286 21.7227C23.6859 21.7227 25.2753 22.381 26.4473 23.5527C26.7356 23.8511 27.0804 24.0892 27.4617 24.253C27.843 24.4167 28.253 24.503 28.668 24.5066C29.0829 24.5102 29.4944 24.4311 29.8785 24.274C30.2625 24.1168 30.6114 23.8848 30.9048 23.5914C31.1982 23.298 31.4303 22.9491 31.5874 22.565C31.7445 22.181 31.8236 21.7695 31.82 21.3545C31.8164 20.9396 31.7302 20.5295 31.5664 20.1483C31.4026 19.767 31.1646 19.4222 30.8661 19.1339C28.522 16.7905 25.3432 15.4741 22.0286 15.4741C18.714 15.4741 15.5352 16.7905 13.1911 19.1339L3.8161 28.5089C2.62222 29.662 1.66995 31.0413 1.01484 32.5663C0.359723 34.0914 0.0148947 35.7316 0.000471959 37.3914C-0.0139507 39.0511 0.30232 40.6971 0.930831 42.2333C1.55934 43.7695 2.48751 45.1652 3.66116 46.3388C4.83482 47.5125 6.23047 48.4407 7.76668 49.0692C9.30288 49.6977 10.9489 50.014 12.6086 49.9995C14.2684 49.9851 15.9086 49.6403 17.4337 48.9852C18.9587 48.3301 20.338 47.3778 21.4911 46.1839L26.1786 41.4964C26.4771 41.2081 26.7151 40.8633 26.8789 40.482C27.0427 40.1008 27.1289 39.6907 27.1325 39.2758C27.1361 38.8608 27.057 38.4493 26.8999 38.0653C26.7428 37.6812 26.5107 37.3323 26.2173 37.0389C25.9239 36.7455 25.575 36.5135 25.191 36.3563C24.8069 36.1992 24.3954 36.1201 23.9805 36.1237C23.5655 36.1273 23.1555 36.2136 22.7742 36.3773C22.393 36.5411 22.0481 36.7792 21.7598 37.0776L17.0723 41.7651C16.4958 42.3621 15.8062 42.8382 15.0436 43.1658C14.2811 43.4933 13.461 43.6658 12.6311 43.673C11.8012 43.6802 10.9782 43.522 10.2101 43.2078C9.44204 42.8935 8.74421 42.4294 8.15738 41.8426C7.57055 41.2558 7.10647 40.558 6.79222 39.7899C6.47796 39.0218 6.31983 38.1988 6.32704 37.3689C6.33425 36.539 6.50666 35.7189 6.83422 34.9564C7.16177 34.1938 7.63791 33.5042 8.23485 32.9277L17.6098 23.5527Z"
				fill={color}
			/>
		</svg>
	);
};

export default Chain;
