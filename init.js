window.addEventListener("load", init, true);

function init() {
  // cài đặt scene, camera, và renderer
  createScene();
  lockcamera();
  // thêm ánh sáng
  createLights();
  // thêm các đối tượng
  // createFlat();
  createHouse();
  createBox();

  // bắt đầu vòng lặp cập nhật vị trí các đối tượng
  // và render scene trong mỗi khung hình
  loop();
}
