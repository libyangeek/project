import logging
import threading
from datetime import datetime

class Logger:
    _instance = None
    _lock = threading.RLock()

    def __new__(cls, config):
        with cls._lock:
            if cls._instance is None:
                cls._instance = super().__new__(cls)
                cls._instance._init(config)
            return cls._instance

    def _init(self, config):
        self.logger = logging.getLogger("AlMuizzNucleus")
        self.logger.setLevel(logging.INFO)
        
        formatter = logging.Formatter('%(asctime)s - [SOUL_PULSE] - %(levelname)s - %(message)s')
        
        # Stream to Console
        ch = logging.StreamHandler()
        ch.setFormatter(formatter)
        self.logger.addHandler(ch)

        # File Persistence
        log_path = config.system.get("log_file")
        if log_path:
            os.makedirs(os.path.dirname(log_path), exist_ok=True)
            fh = logging.FileHandler(log_path)
            fh.setFormatter(formatter)
            self.logger.addHandler(fh)

    def info(self, msg): self.logger.info(msg)
    def error(self, msg): self.logger.error(msg)
    def warning(self, msg): self.logger.warning(msg)
    def debug(self, msg): self.logger.debug(msg)
