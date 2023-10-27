LOGGING_CONFIG = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'main_format': {
            'format': '%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        },
    },
    'handlers': {
        'main': {
            'level': 'WARNING',
            'class': 'logging.handlers.RotatingFileHandler',
            'maxBytes': 1_048_576,
            'backupCount': 50,
            'formatter': 'main_format',
            'filename': 'logs/error.log',
        },
    },
    'loggers': {
        'main': {
            'handlers': ['main'],
            'level': 'WARNING',
            'propagate': True,
        },
    },
}
